import { v4 as uuid } from "uuid"

class NotificationSubject {
    constructor() {
        this.observers = []
        this.intervalId = null
        this.messages = []


        this.attach = this.attach.bind(this)
        this.detach = this.detach.bind(this)
        this.notification = this.notification.bind(this)
        this.autoRemove = this.autoRemove.bind(this)
        this.notify = this.notify.bind(this)
    }

    attach(observer) {
        this.observers.push(observer)
    }

    detach(removedObserver) {
        this.observers = this.observers.filter((observer) => removedObserver !== observer)
    }

    notification(message, type, delayRemove = 2000) {
        const id = uuid()

        this.messages.push({
            id: id,
            content: message,
            type: type,
            delayRemove: delayRemove
        })
        this.autoRemove(id, delayRemove)
    }

    notify() {
        for(let observer of this.observers){
            observer(this.messages)
        }
    }

    autoRemove(id, delayRemove){
        this.notify()
        setTimeout(()=>{
            this.messages = this.messages.filter((item)=> item.id !== id)  
            this.notify()   
        }, delayRemove )
    }

}
const {notification, detach, attach} = new NotificationSubject()


export {notification, attach, detach}