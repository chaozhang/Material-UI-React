import React, { Component } from 'react'
import { Icons, ModalDialog } from '../../components/'
import { MarkdownElement as Markdown } from '@material-ui/docs/'


class IconPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
        };
        this.iconsComp = null;
    }

    onSelect(key) {
        this.setState({
            selected: key
        });
    }

    handleClose = () => {
        this.setState({ selected: false });
    };

    buildIconComp() {
        if(this.iconsComp) return this.iconsComp;

        const iconsComp = [];

        for(let key in Icons) {
            const Icon = Icons[key];
            const className = key === this.state.selected ? 'selected' : '';

            iconsComp.push(
                <li className = {className}
                    key={'icon-' + key}
                    onClick={this.onSelect.bind(this, key)}
                >
                    <Icon />
                </li>
            );
        };

        this.iconsComp = iconsComp;

        return this.iconsComp;
    }

    buildCodeSample() {
        return (
            <Markdown
                text={`
\`\`\`javascript
import { Icons } from "ZapWebCommon/lib/js/"

const IconComponent = Icons['${this.state.selected}'];


return <div><IconComponent /></div>;
\`\`\`
                    `}
            />
        )
    }

    renderModal() {
        const {selected} = this.state;

        if(!selected) return;

        const Icon = Icons[selected];

        return (
            <ModalDialog
                open={!!selected}
                onClose={this.handleClose}
                title={<div className='modal-icon-title'>Sample Usage for Icon {selected}<Icon /></div>}
                actions={[
                    {
                        label: 'Close',
                        onClick: this.handleClose
                    }
                ]}
            >
                {this.buildCodeSample()}
            </ModalDialog>
        )
    }

    render() {
        return (
            <div className='page-icons'>
                <h3>Click an Icon to see sample usage</h3>
                <ul>{this.buildIconComp()}</ul>
                {this.renderModal()}
            </div>
        )
    }
}


export default IconPage