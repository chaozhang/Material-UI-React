import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import {
  Drawer, List, ListItem, ListItemIcon,
  ListItemText, Icons, Collapse
} from '../'


class AppNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClickExpand(path, value) {
        const newState = {...this.state};

        newState[path] = !value;

        this.setState(newState);
    }

    renderNavItem(path, navItem) {
        const { icon, subNavItems, label, url } = navItem;
        const Icon = Icons[icon];
        const ExpandLess = Icons.ExpandLess;
        const ExpandMore = Icons.ExpandMore;

        path += `-${label}`;

        if(subNavItems) {
            const expand = this.state[path] === undefined
                ? window.location.pathname.indexOf(url) > -1
                : this.state[path];

            return (
                <React.Fragment key={path}>
                    <ListItem button onClick={this.onClickExpand.bind(this, path, expand)}>
                        <ListItemIcon>
                            <Icon />
                        </ListItemIcon>
                        <ListItemText inset primary={label} />
                        {expand ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={expand} timeout="auto" unmountOnExit>
                        {this.renderNavItems(subNavItems, true, path)}
                    </Collapse>
                </React.Fragment>
            )
        } else {
            return (
                <NavLink exact={url === '/'} to={url} key={path} activeClassName="active">
                    <ListItem button className='nav-item'>
                        <ListItemIcon>
                          <Icon />
                        </ListItemIcon>
                        <ListItemText inset primary={label} />
                    </ListItem>
                </NavLink>
            )
        }
    }

    renderNavItems(navItems, nested, path) {
        return (
            <List className={nested ? 'nested' : ''}>
                {navItems.map(this.renderNavItem.bind(this, path))}
            </List>
        );
    }

    render() {
        const { navItems } = this.props;

        return (
            <Drawer
                variant="permanent"
                className='app-nav'
            >
                {this.renderNavItems(navItems, false, '')}
            </Drawer>
        )
  }
}


AppNav.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        menuItems: PropTypes.arrayOf(PropTypes.object)
    }))
}


export default AppNav;
