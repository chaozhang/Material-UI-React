import React from 'react'
import Base from './'
import { Button } from '../../../components/'


const buildCode = () => {
    return (
`import { Button } from "ZapWebCommon/lib/js/"

<Button
    color="primary | secondary"
    variant="outlined | contained"
    size="small | medium | large"
>
    Button
</Button>

<Button disabled>Disabled Button</Button>`
    )
}

const buildDemo = () => {
    return (
        <div>
            <h3>Default</h3>
            <div className='section'>
                <Button>Default</Button>
                <Button color="primary">
                    Primary
                </Button>
                <Button color="secondary">
                    Secondary
                </Button>
                <Button disabled>
                    Disabled
                </Button>
            </div>
            <h3>Outlined</h3>
            <div className='section'>
                <Button variant="outlined">Default</Button>
                <Button variant="outlined" color="primary">
                    Primary
                </Button>
                <Button variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button variant="outlined" disabled>
                    Disabled
                </Button>
            </div>
            <h3>Contained</h3>
            <div className='section'>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
            </div>
            <h3>Size</h3>
            <div className='section'>
                <Button size="small" variant="contained">
                    Small
                </Button>
                <Button size="medium" variant="contained" color="secondary">
                    Medium
                </Button>
                <Button size="medium" variant="contained" disabled>
                    Disabled
                </Button>
                <Button size="large" variant="contained" color="primary">
                    Large
                </Button>
            </div>
        </div>
    )
}

class example extends Base {

    render() {
        return this.buildContent(
            'button',
            buildDemo(),
            buildCode()
        );
    }
}


export default example