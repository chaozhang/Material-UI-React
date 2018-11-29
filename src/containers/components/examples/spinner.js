import React from 'react'
import Base from './'
import { CircularProgress } from '../../../components/'


const buildCode = () => {
    return (
`import { CircularProgress } from "ZapWebCommon/lib/js/"

<CircularProgress
    size={50}
    color='primary | secondary'
    thickness={7}
    size={60}
/>`
    )
}

const buildDemo = () => {

    return (
        <div className='spinners-list'>
            <CircularProgress />
            <CircularProgress size={50} />
            <CircularProgress color='secondary' />
            <CircularProgress thickness={5} size={60} style={{color: '#ef8d32'}} />
        </div>
    )
}


class example extends Base {

    render() {
        return this.buildContent(
            'spinner',
            buildDemo(),
            buildCode()
        );
    }
}


export default example