// react
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// components
import { Footer, AppHeader, AppNav } from '../components/'
import headerProps from '../components/AppHeader/data'
import appNavProps from '../components/AppNav/data'

// containers
import Home from './home/'
import Colors from './colors/'
import Icons from './icons/'
import Invalid from './invalid/'
import Components from './components/'
import Charts from './charts/'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAppNav: true
        };
        this.root = document.querySelector('#root');
    }

    onClickNavToggle = () => {
        this.setState(state => ({ showAppNav: !state.showAppNav }));
    };

    render() {
        headerProps.appNav = {
            onClick: this.onClickNavToggle,
            icon: 'Menu'
        }

        if(this.root) {
            if(this.state.showAppNav) {
                this.root.classList.remove('no-margin-left');
            } else {
                this.root.classList.add('no-margin-left');
            }
        }

        return (
            <BrowserRouter basename={"/Material-UI-React"}>
                <React.Fragment>
                    {/* render app header */}
                    <AppHeader {...headerProps} />

                    {/* render app header */}
                    {this.state.showAppNav && <AppNav {...appNavProps} />}

                    {/* render center content */}
                    <div id='content'>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/components' component={Components} />
                            <Route path='/charts' component={Charts} />
                            <Route path='/colors' component={Colors} />
                            <Route path='/icons' component={Icons} />
                            <Route component={Invalid} />
                        </Switch>

                        {/* render footer */}
                        <Footer />
                    </div>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}


export default App;