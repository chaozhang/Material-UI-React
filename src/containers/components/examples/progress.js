import React from 'react'
import Base from './'
import { LinearProgress } from '../../../components/'


const buildCode = () => {
    return (
`import { LinearProgress } from "ZapWebCommon/lib/js/"

<LinearProgress
    variant='query'
    color='primary | secondary'
/>`
    )
}

const buildDemo = () => {

    return (
        <div className='progress-list'>
            <LinearProgress />
            <LinearProgress variant='query' color='secondary' />
        </div>
    )
}


class example extends Base {

    render() {
        return this.buildContent(
            'progress',
            buildDemo(),
            buildCode()
        );
    }
}


export default example