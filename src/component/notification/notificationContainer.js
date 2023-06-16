import { useEffect, useState } from "react";

import { attach, detach, notification } from "./notificationSubject"
import "./style.scss"

// note : before render every thing, notificationContainer should be render,
//  that connect ot notificationSubject and ready receive messages

function NotificationContainer() {
    const [messages, setMessages] = useState([])

    attach((message)=>{
        setMessages(message)
    })

    useEffect(() => {
        return () => detach(observer)
    }, [])


    return (
        <div id={"notification"}>
            {
                messages.map((message)=>{
                    return <span key={message.id} className={`notificationItem ${message.type}`}>{message.content}</span>
                })
            }
        </div>
    )
}

export default NotificationContainer