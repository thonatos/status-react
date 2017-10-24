import React, { Component } from 'react'
import Dimensions from 'react-dimensions'
import ReactEcharts from 'echarts-for-react'
import { observer, inject } from 'mobx-react'
import 'echarts/map/js/world.js'

@inject('trends', 'app')
@observer
class World extends Component {
  componentDidMount() {
    // let count = 0
    // setInterval(() => {
    //   const { trends } = this.props
    //   const cities = ['Afghanistan', 'Albania', 'Belize', 'China', 'Estonia', 'Hungary']
    //   trends.increase(
    //     cities[count % 6],
    //     Math.random() * 10000,
    //   )
    //   count++
    // }, 1000)
  }

  getOption = (data, subtext) => {
    return {
      title: {
        text: 'Realtime Share Statistics - World',
        textStyle: {
          color: '#fff',
        },
        subtext: subtext || 'Arashivision Inc,',
        subTextStyle: {
          color: '#fff',
        },
        left: 'center',
        top: '10',
      },
      backgroundColor: '#404A58',
      visualMap: {
        type: 'continuous',
        min: 0,
        max: 10000,
        text: ['High', 'Low'],
        textStyle: {
          color: '#fff',
        },
        left: '10',
        bottom: '10',
        realtime: true,
        calculable: true,
        inRange: {
          color: [
            'rgba(37, 140, 249, 0.8)',
            'rgba(255, 255, 255, 0.8)',
            'rgba(14, 241, 242, 0.8)',
          ],
        },
      },
      series: [
        {
          type: 'map',
          mapType: 'world',
          label: {
            emphasis: {
              color: '#fff',
              show: true,
            },
          },
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111',
              borderWidth: 0.5,
            },
            emphasis: {
              borderWidth: 0.5,
              borderColor: '#111',
              areaColor: '#2a333d',
            },
          },
          data,
        },
      ],
    }
  }

  render() {
    // const { containerWidth, containerHeight } = this.props
    const { trends } = this.props
    const { world } = trends
    const option = this.getOption(world)

    return (
      <ReactEcharts
        className="react_for_echarts"
        option={option}
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    )
  }
}

export default Dimensions()(World)
