import React from 'react'
import Base from './'
import {
    Avatar, Icons, Card,
    CardContent
} from '../../../components/'


const buildCode = () => {
    return (
`import { Avatar, Icons } from "ZapWebCommon/lib/js/"

const SvgIcon = Icons.Avatar;


<Avatar src="image-url"/>

<Avatar><SvgIcon/></Avatar>

<Avatar>H</Avatar>`
    )
}

const buildDemo = () => {
    const {Folder,Pageview,Assignment} = Icons;

    return (
        <div className='avatar-list'>
            <h3>External Images</h3>
            <Card>
                <CardContent>
                    <div className='section'>
                        <Avatar
                            src="https://cdn.iconscout.com/public/images/icon/free/png-512/avatar-user-business-man-399587fe24739d5a-512x512.png"
                        />
                        <Avatar
                            src="https://image.flaticon.com/icons/png/512/146/146018.png"
                        />
                        <Avatar
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwH6DalS_KpcvdezZT-tymCO2Spog0pW1g8ySWMhAPAohnxKNJ"
                        />
                    </div>
                </CardContent>
            </Card>

            <h3>Svg Icons</h3>
            <Card>
                <CardContent>
                    <div className='section'>
                        <Avatar>
                            <Folder/>
                        </Avatar>
                        <Avatar style={{backgroundColor: '#e91e63'}}>
                            <Pageview/>
                        </Avatar>
                        <Avatar style={{backgroundColor: '#4caf50'}}>
                            <Assignment/>
                        </Avatar>
                    </div>
                </CardContent>
            </Card>

            <h3>Letters</h3>
            <Card>
                <CardContent>
                    <div className='section'>
                        <Avatar>H</Avatar>
                        <Avatar style={{backgroundColor: '#ff5722'}}>N</Avatar>
                        <Avatar style={{backgroundColor: '#673ab7'}}>OP</Avatar>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}


class example extends Base {

    render() {
        return this.buildContent(
            'avatar',
            buildDemo(),
            buildCode()
        );
    }
}


export default example