import React from 'react'
import Base from './'
import { Charts } from '../../../components/'


const buildCode = () => {
    return (
`import { Charts } from "ZapWebCommon/lib/js/"
const {
    XYPlot,
    VerticalBarSeries,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines
} = Charts;

<XYPlot
  stackBy="y"
  xDomain={[
    0,
    8
  ]}
  yDomain={[
    0,
    50
  ]}
  width={width*0.9}
  height={height*0.9}
>
  <VerticalGridLines />
  <HorizontalGridLines />
  <XAxis />
  <YAxis />
  <VerticalBarSeries
    cluster="stack 1"
    data={[
      {
        x: 0,
        y: 10
      },
      {
        x: 1,
        y: 12.077792409917427
      },
      {
        x: 2,
        y: 10.8253430474924
      },
      {
        x: 3,
        y: 10.316423721676621
      },
      {
        x: 4,
        y: 10.015041420903938
      },
      {
        x: 5,
        y: 11.760252623908936
      },
      {
        x: 6,
        y: 12.206552688134733
      },
      {
        x: 7,
        y: 14.00754345141172
      },
      {
        x: 8,
        y: 13.334025519982529
      }
    ]}
    style={{}}
  />
  <VerticalBarSeries
    cluster="stack 1"
    data={[
      {
        x: 0,
        y: 10
      },
      {
        x: 1,
        y: 10.009183380617278
      },
      {
        x: 2,
        y: 12.193993302482362
      },
      {
        x: 3,
        y: 12.485633359179372
      },
      {
        x: 4,
        y: 14.426294430642923
      },
      {
        x: 5,
        y: 15.171198040514977
      },
      {
        x: 6,
        y: 12.839586846277957
      },
      {
        x: 7,
        y: 14.44727198529152
      },
      {
        x: 8,
        y: 15.036375889406496
      }
    ]}
    style={{}}
  />
  <VerticalBarSeries
    cluster="stack 1"
    data={[
      {
        x: 0,
        y: 10
      },
      {
        x: 1,
        y: 11.770169288636193
      },
      {
        x: 2,
        y: 9.724928633080426
      },
      {
        x: 3,
        y: 10.543276447593408
      },
      {
        x: 4,
        y: 12.102019097701225
      },
      {
        x: 5,
        y: 14.319728257871514
      },
      {
        x: 6,
        y: 13.380300053811409
      },
      {
        x: 7,
        y: 14.093495381619489
      },
      {
        x: 8,
        y: 12.37448617978271
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
        VerticalBarSeries,
        XAxis,
        YAxis,
        VerticalGridLines,
        HorizontalGridLines
    } = Charts;

    const {width, height} = state;

    return (
        <XYPlot
          stackBy="y"
          xDomain={[
            0,
            8
          ]}
          yDomain={[
            0,
            50
          ]}
          width={width*0.9}
          height={height*0.9}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            cluster="stack 1"
            data={[
              {
                x: 0,
                y: 10
              },
              {
                x: 1,
                y: 12.077792409917427
              },
              {
                x: 2,
                y: 10.8253430474924
              },
              {
                x: 3,
                y: 10.316423721676621
              },
              {
                x: 4,
                y: 10.015041420903938
              },
              {
                x: 5,
                y: 11.760252623908936
              },
              {
                x: 6,
                y: 12.206552688134733
              },
              {
                x: 7,
                y: 14.00754345141172
              },
              {
                x: 8,
                y: 13.334025519982529
              }
            ]}
            style={{}}
          />
          <VerticalBarSeries
            cluster="stack 1"
            data={[
              {
                x: 0,
                y: 10
              },
              {
                x: 1,
                y: 10.009183380617278
              },
              {
                x: 2,
                y: 12.193993302482362
              },
              {
                x: 3,
                y: 12.485633359179372
              },
              {
                x: 4,
                y: 14.426294430642923
              },
              {
                x: 5,
                y: 15.171198040514977
              },
              {
                x: 6,
                y: 12.839586846277957
              },
              {
                x: 7,
                y: 14.44727198529152
              },
              {
                x: 8,
                y: 15.036375889406496
              }
            ]}
            style={{}}
          />
          <VerticalBarSeries
            cluster="stack 1"
            data={[
              {
                x: 0,
                y: 10
              },
              {
                x: 1,
                y: 11.770169288636193
              },
              {
                x: 2,
                y: 9.724928633080426
              },
              {
                x: 3,
                y: 10.543276447593408
              },
              {
                x: 4,
                y: 12.102019097701225
              },
              {
                x: 5,
                y: 14.319728257871514
              },
              {
                x: 6,
                y: 13.380300053811409
              },
              {
                x: 7,
                y: 14.093495381619489
              },
              {
                x: 8,
                y: 12.37448617978271
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
            'Stacked Bar Chart',
            buildDemo(this.state),
            buildCode()
        );
    }
}


export default example