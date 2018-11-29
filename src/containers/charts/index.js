import React from 'react'
import { Route, Switch } from 'react-router-dom'
import barChartSection from './examples/bar'
import stackedBarChartSection from './examples/stackedBar'
import areaChartSection from './examples/area'
import lineChartSection from './examples/line'
import pieChartSection from './examples/pie'
import scatterplotChartSection from './examples/scatterplot'


const Components = () => {
    return (
        <div className='page-charts'>
            <div className='right'>
                <Switch>
                    <Route path='/charts/bar' component={barChartSection} />
                    <Route path='/charts/stackbar' component={stackedBarChartSection} />
                    <Route path='/charts/area' component={areaChartSection} />
                    <Route path='/charts/line' component={lineChartSection} />
                    <Route path='/charts/pie' component={pieChartSection} />
                    <Route path='/charts/scatterplot' component={scatterplotChartSection} />
                </Switch>
            </div>
        </div>
    )
}


export default Components