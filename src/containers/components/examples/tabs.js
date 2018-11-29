import React from 'react'
import Base from './'
import { MessageBar } from '../../../components/'


const buildCode = () => {
    return (
`import {
    AppBar,
    Tabs,
    Tab
} from "ZapWebCommon/lib/js/"

const { tabId } = this.state;

<Tabs
    value={tabId}
    onChange={this.handleChange}
    indicatorColor="primary"
    textColor="primary"
>
    <Tab label="Tabs Demo" />
    <Tab label="Sample Usage" />
</Tabs>`
    )
}

const buildDemo = () => {

    return (
        <div className='no-content'>
            <MessageBar
                message={`More details in sample usage!`}
                variant='info'
                onClose={()=>{}}
            />
        </div>
    )
}


class example extends Base {

    render() {
        return this.buildContent(
            'tabs',
            buildDemo(),
            buildCode()
        );
    }
}


export default example