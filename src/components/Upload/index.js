import Dropzone from 'react-dropzone'
import React, {Component} from 'react'
import FileList from './FileList'
import mime from 'mime'
import {unionBy} from 'lodash-es'

class Upload extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      acceptedFiles: [],
      rejectedFiles: []
    }
  }
  

  onDrop(acceptedFiles=[], rejectedFiles=[]) {
    const {onDrop = () => {}} = this.props

    this.setState((prevState, props) => ({
      acceptedFiles: unionBy(prevState.acceptedFiles, acceptedFiles, 'name'),
      rejectedFiles: unionBy(prevState.rejectedFiles, rejectedFiles, 'name')
    }))
    onDrop(acceptedFiles, rejectedFiles)
  }

  onDropAccepted(files=[]) {
    const {onDropAccepted = () => {}} = this.props

    // console.log('acceptedFiles', files)
  }

  onDropRejected(files=[]) {
    const {onDropRejected = () => {}} = this.props

    // console.log('rejectedFiles', files)

  }

  render() {
    const {onDrop, onDropAccepted, onDropRejected, accept=[], others} = this.props

    let acceptedFormats = Array.isArray(accept) ? accept : [accept]
    acceptedFormats = accept.map(format => mime.getType(format) || format)


    return (
      <div>
        <FileList acceptedFiles={this.state.acceptedFiles} rejectedFiles={this.state.rejectedFiles}/>
        <Dropzone
        accept={acceptedFormats}
        onDrop={(acceptedFiles, rejectedFiles) => this.onDrop(acceptedFiles, rejectedFiles)}
        onDropAccepted = {(files) => this.onDropAccepted(files)}
        onDropRejected={(files) => this.onDropRejected(files)}
        {...others}
        />
      </div>
    )
  }
}
export default Upload

