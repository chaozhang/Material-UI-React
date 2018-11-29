import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import {
  AppBar, Toolbar, Menu,
  Typography, MenuItem, Avatar, Icons, IconButton
} from '../'


class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null
        }
    }

    onClickMenuOpen(e) {
        this.setState({ anchorEl: e.currentTarget });
    }

    onClickMenuClose() {
        this.setState({ anchorEl: null });
    }

    renderActions() {
        return (
            <div className='actions'>
                {this.props.children}
            </div>
        )
    }

    renderMenuItem(data) {
        const { label, icon, onClick, url} = data;
        const Icon = Icons[icon];

        if(onClick) {
            const click = () => {
                this.onClickMenuClose();

                onClick();
            }

            return (
                <MenuItem
                    onClick={click}
                    className='app-header-menu-item'
                    key={label}
                >
                    <Icon />
                    {label}
                </MenuItem>
            )
        }

        if(url) {
            return (
                <MenuItem
                    className='app-header-menu-item'
                    key={label}
                >
                    <a href={url}>
                        <Icon />
                        {label}
                    </a>
                </MenuItem>
            )
        }

        return
    }

    renderAvatar(menu) {
        if(menu.profileImage) {
            return (
                <Avatar
                    onClick={this.onClickMenuOpen.bind(this)}
                    src={menu.profileImage}
                />
            )
        } else if(menu.icon) {
            const MenuIcon = Icons[menu.icon];

            return (
                <Avatar
                    onClick={this.onClickMenuOpen.bind(this)}
                >
                    <MenuIcon />
                </Avatar>
            )
        }
    }

    renderMenu() {
        const { menu } = this.props;
        
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const avatar = this.renderAvatar(menu);

        const menuItems = menu.menuItems.map(this.renderMenuItem.bind(this));

        return (
            <div className='menu'>
                {avatar}
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.onClickMenuClose.bind(this)}
                >
                    {menuItems}
                </Menu>
            </div>
        )
    }

    renderNavMenu() {
        const { appNav } = this.props;

        if(!appNav) return;

        const Icon = Icons[appNav.icon];

        return (
            <IconButton onClick={appNav.onClick}>
                <Icon />
            </IconButton>
        )                    
    }

    render() {
        const { logo, app } = this.props;

        return (
            <AppBar color='default' className='top'>
              <Toolbar className='toolbar'>
                <div className='left'>
                    {this.renderNavMenu()}
                    <a className='home' href={logo.url}>
                    </a>
                    <NavLink to={app.url} className='app'>
                        <div className="logo-container">
                            <Typography variant="title">
                                {app.title}
                            </Typography>
                        </div>
                    </NavLink>
                </div>
                <div className='right'>
                    {this.renderActions()}
                    {this.renderMenu()}
                </div>
              </Toolbar>
            </AppBar>
        )
  }
}


AppHeader.propTypes = {
    logo: PropTypes.shape({
        url: PropTypes.string.isRequired
    }),
    app: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }),
    actions: PropTypes.arrayOf(PropTypes.shape({
        onClick: PropTypes.func,
        icon: PropTypes.string
    })),
    menu: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        menuItems: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func,
            icon: PropTypes.string.isRequired,
            url: PropTypes.string
        }))
    })
}


export default AppHeader;
