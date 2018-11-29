import React from 'react'
import Base from './'
import { Charts } from '../../../components/'


const buildCode = () => {
    return (
`import { Charts } from "ZapWebCommon/lib/js/"
const {
    XYPlot,
    LineSeries,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines
} = Charts;

<XYPlot
  width={width*0.9}
  height={height*0.9}
>
  <VerticalGridLines />
  <HorizontalGridLines />
  <XAxis title="X Axis" position="start"/>
  <YAxis title="Y Axis"/>
  <LineSeries
    className="first-series"
    data={[
      {x: 1, y: 3},
      {x: 2, y: 5},
      {x: 3, y: 15},
      {x: 4, y: 12}
    ]}/>
  <LineSeries
    className="second-series"
    data={null}/>
  <LineSeries
    className="third-series"
    style={{
      strokeDasharray: '2 2'
    }}
    data={[
      {x: 1, y: 10},
      {x: 2, y: 4},
      {x: 3, y: 2},
      {x: 4, y: 15}
    ]}
    strokeDasharray="7, 3"
    />
  <LineSeries
    className="fourth-series"
    data={[
      {x: 1, y: 7},
      {x: 2, y: 11},
      {x: 3, y: 9},
      {x: 4, y: 2}
    ]}/>
</XYPlot>`
    )
}

const buildDemo = (state) => {
    const {
        XYPlot,
        LineSeries,
        XAxis,
        YAxis,
        VerticalGridLines,
        HorizontalGridLines
    } = Charts;

    const {width, height} = state;

    return (
      <XYPlot
        width={width*0.9}
        height={height*0.9}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis title="X Axis" position="start"/>
        <YAxis title="Y Axis"/>
        <LineSeries
          className="first-series"
          data={[
            {x: 1, y: 3},
            {x: 2, y: 5},
            {x: 3, y: 15},
            {x: 4, y: 12}
          ]}/>
        <LineSeries
          className="second-series"
          data={null}/>
        <LineSeries
          className="third-series"
          style={{
            strokeDasharray: '2 2'
          }}
          data={[
            {x: 1, y: 10},
            {x: 2, y: 4},
            {x: 3, y: 2},
            {x: 4, y: 15}
          ]}
          strokeDasharray="7, 3"
          />
        <LineSeries
          className="fourth-series"
          data={[
            {x: 1, y: 7},
            {x: 2, y: 11},
            {x: 3, y: 9},
            {x: 4, y: 2}
          ]}/>
      </XYPlot>
    )
}


class example extends Base {

    render() {
        return this.buildContent(
            'Line Chart',
            buildDemo(this.state),
            buildCode()
        );
    }
}


export default example