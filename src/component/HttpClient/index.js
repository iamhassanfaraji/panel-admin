import Cookies from "js-cookie"


const httpReGet = async ({ url, headers, body}) => {

    const comeBack = await fetch(url, {
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            headers
        },
        "body": JSON.stringify(body)
    })

    return comeBack

}


const httpRePost = async ({ url, headers, body}) => {
    const token = Cookies.get("token")
    
    const params = {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "token": token,
            ...headers
        },
        "body": JSON.stringify(body)
    }
 
    const comeBack = await fetch(url, params)
    return comeBack
}



export { httpReGet, httpRePost }