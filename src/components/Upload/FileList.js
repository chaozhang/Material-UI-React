import React from 'react'
import {map} from 'lodash-es'
import filesize from 'filesize'
import {
  ListItem, ListItemIcon, Icons, ListItemText, List, ListSubheader
} from '../'


function InvalidFiles(props) {
  const FileIcon = Icons['Description'];
  const CheckIcon = Icons['CheckCircle'];
  const XIcon = Icons['Cancel'];
  
  function showValidFiles(files=[]) {
    const options = {
      subheading: 'These files will be uploaded',
      StatusIcon: CheckIcon
    }

    return showFiles(files, options)
  }

  function showInvalidFiles(files=[]) {
    const options = {
      subheading: 'These files cannot be uploaded',
      StatusIcon: XIcon
    }

    return showFiles(files, options)
  }

  function showFiles(files=[], options={}) {
    const {StatusIcon} = options
    const fileList = map(files, file => (
      <ListItem>
      <ListItemIcon>
        {StatusIcon ? <StatusIcon/> : null}
      </ListItemIcon>
      <ListItemIcon>
        <FileIcon />
      </ListItemIcon>

      <ListItemText
        primary={file.name}
        secondary={`Size: (${filesize(file.size)})`}
      />
    </ListItem>
    ))
    
    return (<List
      className='doc-list'
      subheader={<ListSubheader component="div">{options.subheading}</ListSubheader>}
    >
      {fileList}
    </List>)
  }

  return (
    <div>
      The following files are invalid:
      {showInvalidFiles(props.acceptedFiles)}
      Files to be uploaded:
      {showValidFiles(props.rejectedFiles)}
    </div>
  )
}

export default InvalidFiles
