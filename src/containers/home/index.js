import React from 'react'
import {
  Typography, Card,
    CardContent, CardHeader
} from '../../components/'
import { MarkdownElement as Markdown } from '@material-ui/docs/'


const Home = () => {
    return (
        <div className='page-home'>
            <Card>
                <CardHeader
                    title={'Introduction'}
                />
                <CardContent>
                    <Typography variant="subheading" gutterBottom>
                        {`Zap Design Sytem is open source React components library 
                            following industry design standard like Google Material Design, Salesforce Lightning, Uber React Vis and others.`}
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardHeader
                    title={'Installation'}
                />
                <CardContent>
                    <Typography variant="subheading" gutterBottom>
                        {`Install ZapWebCommon package via npm.`}
                    </Typography>
                  <Markdown
                    text={`
\`\`\`sh
$ npm install ZapWebCommon
\`\`\`
                        `}
                  />
                  <Typography variant="subheading" gutterBottom>
                    {'or use yarn'}
                  </Typography>
                  <Markdown
                    text={`
\`\`\`sh
$ yarn add ZapWebCommon
\`\`\`
                        `}
                  />
                  <Typography variant="subheading" gutterBottom>
                    {'Load css from css preprocessors or javascript file'}
                  </Typography>
                  <Markdown
                    text={`
\`\`\`javascript
import "ZapWebCommon/lib/css/base.css";
\`\`\`
                        `}
                  />
                </CardContent>
            </Card>
            <Card>
                <CardHeader
                    title={'Usage'}
                />
                <CardContent>
                    <Typography variant="subheading" gutterBottom>
                        {`Import ZapWebCommon components.`}
                    </Typography>
                  <Markdown
                    className='markdown dark'
                    text={`
\`\`\`javascript
import { Button } from "ZapWebCommon/lib/js/"
\`\`\`
                        `}
                  />
                  <Typography variant="subheading" gutterBottom>
                    {'Integrate to jsx'}
                  </Typography>
                  <Markdown
                    className='markdown dark'
                    text={`
\`\`\`javascript
const App = () => (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
);
\`\`\`
                        `}
                  />
                </CardContent>
            </Card>
        </div>
    );
}


export default Home


