import { httpRePost } from "../../HttpClient"

function standardization(params) {
    const result = {}
    const { page, limit } = { ...params }
    const query = { ...params }

    delete query.page
    delete query.limit
    
    if (Object.values(query).length) {

        for (let key in query) {
            const mayIsNumber = Number(query[key])
            if (typeof mayIsNumber == "number") {
                query[key] = mayIsNumber
            }
        }

        result.query = query
    }




    result.page = Number(page)
    result.limit = Number(limit)
    return result
}

function dataLoader({ api, searchParams }) {
    const body = standardization(Object.fromEntries([...searchParams]))
    const page = searchParams.get("page")
    
    const myPromise = new Promise(async (resolve) => {
        if (page) {
            const result = await httpRePost({
                url: api.read,
                body: body
            })
            if (result.status == 200) {
                const outCome = await result.json()
                if (outCome.data.length != 0) {
                    resolve(outCome)
                } else {
                    resolve(null)
                }
            } else {
                console.log('error fetching data')
            }
        } else {
            const id = searchParams.get('id')
            const result = await httpRePost({ url: api.readById, body: { id: id } })
            if (result.status == 200) {
                const data = await result.json()
                resolve(data)
            } else {
                notification(result.message, "danger")
                console.error(result)
            }
        }
    })
    return myPromise
}


export default dataLoader