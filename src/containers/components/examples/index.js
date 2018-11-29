import React, { Component } from 'react'
import {
    Paper, Tabs, Tab
 } from '../../../components/'
import { MarkdownElement } from '@material-ui/docs/'


class components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabId: 0
        };
    }

    handleChange = (event, tabId) => {
        this.setState({ tabId });
    };

    buildContent(name, demo, text) {
        const { tabId } = this.state;
        const codeMarkdown = <MarkdownElement
            text={`
\`\`\`javascript
${text}
\`\`\`
            `}
            className='markdown'
        />;

        return (
            <Paper className={`section-${name}`}>
                <Paper className='tabs'>  
                  <Tabs
                    value={tabId}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                  >
                    <Tab label={`${name} Demo`} />
                    <Tab label="Sample Usage" />
                  </Tabs>
                </Paper>
                <div className='gallery-content'>
                    {tabId === 0 && demo}
                    {tabId === 1 && codeMarkdown}
                </div>
            </Paper>
        )
    }
}


export default components