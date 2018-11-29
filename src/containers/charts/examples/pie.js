import React from 'react'
import Base from './'
import { Charts } from '../../../components/'


const buildCode = () => {
    return (
`import { Charts } from "ZapWebCommon/lib/js/"
const {
    RadialChart
} = Charts;

<RadialChart
  width={width*0.9}
  height={height*0.9}
  data={[
    {
      angle: 30,
      label: 'Apple'
    },
    {
      angle: 11,
      label: 'Google'
    },
    {
      angle: 4,
      label: 'Facebook'
    },
    {
      angle: 3,
      label: 'Netflix'
    },
    {
      angle: 17,
      label: 'Amazon'
    }
  ]}
  labelsRadiusMultiplier={1.1}
  labelsStyle={{
    fontSize: 12
  }}
  showLabels
/>`
    )
}

const buildDemo = (state) => {
    const {
        RadialChart
    } = Charts;

    const {width, height} = state;

    return (
      <RadialChart
        width={width*0.9}
        height={height*0.9}
        data={[
          {
            angle: 30,
            label: 'Apple'
          },
          {
            angle: 11,
            label: 'Google'
          },
          {
            angle: 4,
            label: 'Facebook'
          },
          {
            angle: 3,
            label: 'Netflix'
          },
          {
            angle: 17,
            label: 'Amazon'
          }
        ]}
        labelsRadiusMultiplier={1.1}
        labelsStyle={{
          fontSize: 12
        }}
        showLabels
      />
    )
}


class example extends Base {

    render() {
        return this.buildContent(
            'Pie Chart',
            buildDemo(this.state),
            buildCode()
        );
    }
}


export default example