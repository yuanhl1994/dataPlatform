import React, { useState, useEffect } from 'react'
import { Chart } from '@antv/g2'
import { Radio } from 'antd'
import moment from 'moment'

interface Props {
  day: any;
  week: any;
  month: any;
}

let btnOptions = [
  { label: '今日', value: 'day' },
  { label: '最近7日', value: 'week' },
  { label: '最近30日', value: 'month' }
]

const formatData = (arr, status) => {
  let output = []
  if (status == 'day') {
    output = arr.map((item, index) => ({
      day: index >= 10 ? `${index}:00` : `0${index}:00`,
      value: item
    }))
  } else if (status == 'week') {
    output = arr.map((item, index) => ({
      day: index + 1,
      value: item
    }))
  } else if (status == 'month') {
    output = arr.map((item, index) => {
      return ({
        day: moment().subtract(index, 'days').format('MM-DD'),
        value: item
      })
    })
  }
  return output
} 

let chart

const CustomChart = (props: Props) => {

  let cls = 'chart' + moment().millisecond() + '' + Math.random().toFixed(6)
  
  const { day, week, month } = props
  const [status, setStatus] = useState('day')

  const handleChange = (e) => {
    // chart.changeData(formatData(props[e.target.value], e.target.value))
    setStatus(e.target.value)
  }

  useEffect(() => {
    chart = new Chart({
      container: cls,
      autoFit: true,
      height: 400
    })
  
    chart.data(formatData(props[status], status))
  
    chart.scale({
      value: {
        min: 0,
        nice: true
      }
    })
  
    chart.tooltip({
      showCrosshairs: true,
      shared: true
    })
  
    chart.line().position('day*value')
    chart.point().position('day*value')
    chart.render()
  }, [])

  useEffect(() => {
    chart.data(formatData(props[status], status))
    chart.render()
  }, [day, week, month])

  useEffect(() => {
    // console.log('ds', status, chart)
    chart.data(formatData(props[status], status))
    chart.render()
  }, [status])
  
  return (
    <div>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <p>货物状态</p>
        <Radio.Group
          options={btnOptions}
          onChange={handleChange}
          value={status}
          optionType='button'
          buttonStyle='solid'
        />
      </div>

      <div id={cls} />
    </div>
  )
}

export default CustomChart