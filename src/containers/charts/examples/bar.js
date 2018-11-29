import React from 'react'
import Base from './'
import { Charts } from '../../../components/'


const buildCode = () => {
    return (
`import { Charts } from "ZapWebCommon/lib/js/"
const {
    XYPlot,
    HorizontalBarSeries,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines
} = Charts;

<XYPlot
    width={width*0.9}
    height={height*0.9}
    xDomain={[
        0,
        20
    ]}
    yDomain={[
        0,
        8
    ]}
>
  <VerticalGridLines />
  <HorizontalGridLines />
  <XAxis />
  <YAxis />
  <HorizontalBarSeries
    data={[
      {
        x: 10,
        y: 0
      },
      {
        x: 12.077792409917427,
        y: 1
      },
      {
        x: 10.8253430474924,
        y: 2
      },
      {
        x: 10.316423721676621,
        y: 3
      },
      {
        x: 10.015041420903938,
        y: 4
      },
      {
        x: 11.760252623908936,
        y: 5
      },
      {
        x: 12.206552688134733,
        y: 6
      },
      {
        x: 14.00754345141172,
        y: 7
      },
      {
        x: 13.334025519982529,
        y: 8
      }
    ]}
    style={{}}
  />
</XYPlot>`
    )
}

const buildDemo = (state) => {
    const {
        XYPlot,
        HorizontalBarSeries,
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
            xDomain={[
                0,
                20
            ]}
            yDomain={[
                0,
                8
            ]}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <HorizontalBarSeries
            data={[
              {
                x: 10,
                y: 0
              },
              {
                x: 12.077792409917427,
                y: 1
              },
              {
                x: 10.8253430474924,
                y: 2
              },
              {
                x: 10.316423721676621,
                y: 3
              },
              {
                x: 10.015041420903938,
                y: 4
              },
              {
                x: 11.760252623908936,
                y: 5
              },
              {
                x: 12.206552688134733,
                y: 6
              },
              {
                x: 14.00754345141172,
                y: 7
              },
              {
                x: 13.334025519982529,
                y: 8
              }
            ]}
            style={{}}
          />
        </XYPlot>
    )
}


class example extends Base {

    render() {
        return this.buildContent(
            'Bar Chart',
            buildDemo(this.state),
            buildCode()
        );
    }
}


export default example