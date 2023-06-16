export function checkConcurrencyEvent(event, target){
    const path = event.composedPath()
    for (let parent of path){
        if(parent == target){
            return true
        }
    }
    return false
}