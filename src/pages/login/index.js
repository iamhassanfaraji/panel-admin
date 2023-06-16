import { useState } from "react";
import { useLocation, Navigate, useOutletContext } from "react-router-dom";

import Cookies from "js-cookie";

import { errorHandler, errorBoundaries } from "../../component/error";
import { notification } from "../../component/notification";
import { httpRePost } from "../../component/HttpClient";

import './style.scss'

const message = {
    200: "ورود با موفقیت انجام شده",
    406: "نام کاربر یا پسورد اشتباه وارد شده است",
    default: 'خطلایی در برنامه به وجود آمده'
}


const Login = errorBoundaries(
    (props) => {
        const [auth, setAuth] = useOutletContext()
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        const location = useLocation()

        const submit = async (e) => {
            errorHandler(async () => {
                e.preventDefault()
                const url = process.env.REACT_APP_URL + '/user/login'
                
                const body = {
                    phoneNumber: `${username}`,
                    password: password
                }

                const result = await httpRePost({ url: url, body: body})

                switch (result.status) {
                    case 200:
                        notification(message[result.status], "success" ,1000)
                        setTimeout(() => {
                            setAuth(true)
                        }, 1000)
                        const res = await result.json()
                        Cookies.set("token", res.message)
                        break;
                    case 406:
                        notification(message[result.status], "danger")
                        break;
                    default:
                        notification(message.default, "danger")
                }
            })
        }
        if (auth) {
            return <Navigate to={location.state ? location.state.from : '/'} replace />
        } else {
            return (
                <div id='login'>
                    <form action="#" onSubmit={submit}>
                        <h2>صفحه ورود</h2>
                        <input type="text" placeholder={'نام کاربری'} value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder={"رمز عبور"} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div>
                            <button type="submit">ورود</button>
                            <a href={"#"}>رمز عبور خود را فراموش کرده اید؟</a>
                        </div>
                    </form>
                </div>
            )
        }
    }
)
export default Login