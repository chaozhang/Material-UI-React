import React from 'react'
import Base from './'
import { MarkdownElement as Markdown } from '@material-ui/docs/'


const code =`
\\\`\\\`\\\`javascript
import { Avatar, Icons } from "ZapWebCommon/lib/js/"

const SvgIcon = Icons.Avatar;


<Avatar src="image-url"/>

<Avatar><SvgIcon/></Avatar>

<Avatar>H</Avatar>
\\\`\\\`\\\`
`;

const buildCode = () => {
    return (
`import { Avatar, Icons } from "ZapWebCommon/lib/js/"

const text = ${code}

const codeMarkdown = <Markdown
    text={text}
    className='markdown'
/>;`
    )
}

const buildDemo = () => {

    return (
        <Markdown
            text={`
\`\`\`javascript
import { Avatar, Icons } from "ZapWebCommon/lib/js/"

const SvgIcon = Icons.Avatar;


<Avatar src="image-url"/>

<Avatar><SvgIcon/></Avatar>

<Avatar>H</Avatar>
\`\`\`
            `}
            className='markdown'
        />
    )
}


class example extends Base {

    render() {
        return this.buildContent(
            'markdown',
            buildDemo(),
            buildCode()
        );
    }
}


export default example