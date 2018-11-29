import React from 'react'
import Base from './'
import { MessageBar } from '../../../components/'


const buildCode = () => {
    return (
`import { MessageBar } from "ZapWebCommon/lib/js/"

<MessageBar
    message='message text'
    variant={success | warning | error | info}
    onClose={()=>{}}
    className={item}
/>`
    )
}

const buildDemo = () => {
    const messageBars = [
        'success',
        'warning',
        'error',
        'info'
    ];

    const messageBarsComp = messageBars.map((item, index) =>
        <MessageBar
            key={index}
            message={`This is ${item} message!`}
            variant={item}
            onClose={()=>{}}
        />
    )

    return (
        <div className='messagebar-list'>
            {messageBarsComp}
        </div>
    )
}


class example extends Base {

    render() {
        return this.buildContent(
            'messagebar',
            buildDemo(),
            buildCode()
        );
    }
}


export default example