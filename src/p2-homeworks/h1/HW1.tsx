import React from 'react'
import s from '../../p1-main/m1-ui/u1-app/App.module.css'

const messageData = {
    avatar: 'https://sun9-63.userapi.com/c622417/v622417184/1cdec/EWEtObUQptA.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

type MessegeDataType = {
    avatar: string
    name: string
    message: string
    time: string
}



function Message({avatar,name,time,message}: MessegeDataType) {
    return (
        <div>
            <div>
                <h3><img src={avatar}></img></h3>
            </div>
            <div>
                <h3>{name}</h3>
                <h3>{message}</h3>
                <h3>{time}</h3>
            </div>

        </div>
    )
}

function HW1() {
    return (
        <div>
            <hr />
            <Message
                {...messageData}
            />

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr />
        </div>
    )
}

export default HW1
