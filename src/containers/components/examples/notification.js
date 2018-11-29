import React from 'react'
import Base from './'
import { Button, Snackbar, MessageBar } from '../../../components/'


const buildCode = () => {
    return (
`import { Button, Snackbar, MessageBar } from "ZapWebCommon/lib/js/"

<div className='notification'>
    <Button onClick={click} variant="outlined">
      Open Notification
    </Button>
    <Snackbar
      anchorOrigin={{
        vertical: 'top | bottom',
        horizontal: 'left | center right',
      }}
      open={open}
      autoHideDuration={3000}
      onClose={close}
    >
      <MessageBar
        onClose={close}
        variant="success | warning | info | error"
        message="Your request has been submitted!"
      />
    </Snackbar>
</div>`
    )
}

const buildDemo = (open, click, close) => {
    return (
        <div className='main'>
            <Button onClick={click} variant="outlined">
              Open Notification
            </Button>
            <Snackbar
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={open}
              autoHideDuration={3000}
              onClose={close}
            >
              <MessageBar
                onClose={close}
                variant="success"
                message="Your request has been submitted!"
              />
            </Snackbar>
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

    handleClose = (event) => {
        this.setState({ open: false });
    };

    render() {
        return this.buildContent(
            'notification',
            buildDemo(this.state.open, this.handleClick, this.handleClose),
            buildCode()
        );
    }
}


export default example