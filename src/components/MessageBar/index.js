import React from 'react'
import PropTypes from 'prop-types'
import { Icons, SnackbarContent, IconButton } from '../'


const variantIcon = {
  success: 'CheckCircle',
  warning: 'Warning',
  error: 'Error',
  info: 'Info'
};


const MessageBar = (props) => {
    const { message, onClose, variant, ...other } = props;
    const Icon = Icons[variantIcon[variant]];
    const CloseIcon = Icons.Close;

    return (
        <SnackbarContent
          message={
            <span className='content'>
              <Icon />
              {message}
            </span>
          }
          className={`message-bar ${variant}`}
          action={[
            <IconButton
              key="close"
              className='close'
              color="inherit"
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
          {...other}
        />
    )
}


MessageBar.propTypes = {
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};


export default MessageBar