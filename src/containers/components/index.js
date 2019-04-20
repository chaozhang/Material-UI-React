import React from 'react'
import { Route, Switch } from 'react-router-dom'
import buttonSection from './examples/button'
import tableSection from './examples/table'
import treeTableSection from './examples/treeTable'
import tabsSection from './examples/tabs'
import spinnerSection from './examples/spinner'
import progressSection from './examples/progress'
import messageBarSection from './examples/messageBar'
import notificationSection from './examples/notification'
import dialogSection from './examples/dialog'
import avatarSection from './examples/avatar'
import markdownSection from './examples/markdown'


const Components = () => {
    return (
        <div className='page-gallery'>
            <div className='right'>
                <Switch>
                    <Route path='/components/button' component={buttonSection} />
                    <Route path='/components/table' component={tableSection} />
                    <Route path='/components/treetable' component={treeTableSection} />
                    <Route path='/components/tabs' component={tabsSection} />
                    <Route path='/components/spinner' component={spinnerSection} />
                    <Route path='/components/progress' component={progressSection} />
                    <Route path='/components/messagebar' component={messageBarSection} />
                    <Route path='/components/notification' component={notificationSection} />
                    <Route path='/components/dialog' component={dialogSection} />
                    <Route path='/components/avatar' component={avatarSection} />
                    <Route path='/components/markdown' component={markdownSection} />
                </Switch>
            </div>
        </div>
    )
}


export default Components