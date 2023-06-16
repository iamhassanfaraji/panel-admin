import { Component } from "react";
import { notification } from "./notification";

/* errorBoundaries dont support below error
 *     1-event
 *     2-Asynchronous code like fetch
 *     
 *     and for error handling above error, use errorhandler function
 */

function errorBoundaries (WrappedComponent){
    class ErrorBoundaries extends Component{
        constructor(props){
            super(props)
            this.body = document.querySelector('body')
        }
    
        componentDidCatch(error,info){
            notification(error.message)
        }
    
        render(){
            return <WrappedComponent {...this.props}/>
        }
    }
    return ErrorBoundaries
}


async function errorHandler (wrappedFunc){
    try {
        await wrappedFunc()
    } catch (error) {
        notification(error.message, "danger")
    }
}
 

export {errorBoundaries, errorHandler}