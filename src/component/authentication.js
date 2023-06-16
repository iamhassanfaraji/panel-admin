import { useState, useEffect, Suspense } from "react"
import { useLocation, Navigate, Outlet, useMatch } from "react-router-dom"
import Cookies from 'js-cookie'

import { errorHandler } from "./error"
import { httpRePost } from "./HttpClient"

const Authentication = () => {
    const token = Cookies.get('token')
    const [auth, setAuth] = useState(token ? 'process' : false)
    const match = useMatch('/login')
    const location = useLocation()
    
    useEffect(() => {
        if (auth === 'process') {
            errorHandler(async () => {
                const result = await httpRePost({
                    url: process.env.REACT_APP_URL + '/user/checkAdmin',
                    body: {
                        token: token
                    }
                })

                if (result.status == 200) {
                    setAuth(true)
                } else if (result.status == 401) {
                    setAuth(false)
                    Cookies.remove(token)
                }

            })
        }
    }, [auth])

    if (auth === 'process') {
        return <h1>لطفا چند لحظه صبر کنید</h1>
    } else {
        if (match) {
            return <Outlet context={[auth, setAuth]} />
        } else {
            if (auth) {
                return <Outlet />
            } else {
                return <Navigate to='/login' state={{ from: location }} replace />
            }
        }
    }

}

export { Authentication }