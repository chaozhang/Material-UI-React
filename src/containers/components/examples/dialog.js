import React from 'react'
import Base from './'
import { Button, ModalDialog } from '../../../components/'


const buildCode = () => {
    return (
`import { ModalDialog } from "ZapWebCommon/lib/js/"

const fn = () => null;

<ModalDialog
    open={true | false}
    onClose={fn}
    title={'title here - optional'}
    actions={[
        {
            label: 'no',
            onClick: fn
        },
        {
            label: 'yes',
            onClick: fn
        },
    ]}
>
    Content - here
</ModalDialog>`
    )
}

const buildDemo = (open, click, close) => {
    return (
        <div className='main'>
            <Button onClick={click} variant="outlined">
              Open Dialog
            </Button>
            <ModalDialog
                open={open}
                onClose={close}
                title={`Use Zap surgical enterprise app?`}
                maxWidth='md'
                actions={[
                    {
                        label: 'disagree',
                        onClick: close
                    },
                    {
                        label: 'agree',
                        onClick: close
                    },
                ]}
            >
                Let Zap surgical apps determine your diagnosis.
                This means sending anonymous data to Zap surgical, do you wanna agree on this?
            </ModalDialog>
        </div>
    )
}


class example extends Base {
    constructor(props) {
        super(props);
        this.state = {
            tabId: 0,
            open: false
        };
    }

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if(reason) return;

        this.setState({ open: false });
    };

    render() {
        return this.buildContent(
            'dialog',
            buildDemo(this.state.open, this.handleClick, this.handleClose),
            buildCode()
        );
    }
}


export default example