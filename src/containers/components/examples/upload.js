import React from 'react'
import Base from './'
import { Upload } from '../../../components/'


const buildCode = () => {
    return (
`import {
    Upload
} from "ZapWebCommon/lib/js/"


<Upload
  accept={['List of exts or mime types that are accepted']}
  onDrop={(acceptedFiles, rejectedFiles) => { alert('Process the files here. I take two arguments as arrays.') }}
  onDropAccepted={(files) => { alert('I will be called only on accepted files') }}
  onDropReject={(files) => { alert('I will be called only on rejected files') }}
/>

See https://react-dropzone.netlify.com/#proptypes for more details.
`
    )
}

const buildDemo = () => {

    return (
        <div className='no-content'>
            <Upload
              accept={['docx']}
              onDrop={(acceptedFiles, rejectedFiles) => { console.log('Process the files here. I take two arguments as arrays.') }}
              onDropAccepted={(files) => { console.log('I will be called only on accepted files') }}
              onDropReject={(files) => { console.log('I will be called only on rejected files') }}
            />
        </div>
    )
}


class example extends Base {

    render() {
        return this.buildContent(
            'upload',
            buildDemo(),
            buildCode()
        );
    }
}


export default example