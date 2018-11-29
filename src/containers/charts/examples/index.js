import React, { Component } from 'react'
import {
    Paper, Tabs, Tab
 } from '../../../components/'
 import { MarkdownElement as Markdown } from '@material-ui/docs/'


class components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabId: 0,
            width: 0,
            height: 0
        };
    }

    componentDidMount() {
        const height = this.contentEle.clientHeight;
        const width = this.contentEle.clientWidth;

        this.setState({
            width: width,
            height: height
        });
    }

    handleChange = (event, tabId) => {
        this.setState({ tabId });
    };

    buildContent(name, demo, text) {
        const { tabId } = this.state;
        const codeMarkdown = <Markdown
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
                <div
                    className='charts-content'
                    ref={ (divElement) => this.contentEle = divElement}
                >
                    {tabId === 0 && demo}
                    {tabId === 1 && codeMarkdown}
                </div>
            </Paper>
        )
    }
}


export default components