import { useState, useEffect, useReducer } from "react";
import { ButtonPrimary, ButtonSecondary} from "../../../component/button";
import { showError } from "../../../component/error";
import { TextInput } from "../../../component/input";

import './style.scss'

function reducer(state, {key, value}){
    const newState = {...state}
    newState[key] = value
    return newState
}

const profileInitialData = {
    firstName: null,
    lastName: null,
    companyName: null,
    phoneNumber: null,
    email: null,
    site: null
}

const accountInitialData = {
    language: null,
    timeZone: null,
    communication: null,
    passwordRest:null    
}

const addressInitialData = {
    address1: null,
    address2: null,
    postCode: null,
    city: null,
    state: null,
    country: null
}

function submit(){

}

export default function AddUser() {
    const [profile, setProfile] = useReducer(reducer, profileInitialData)
    const [account, setAccount] = useReducer(reducer, accountInitialData)
    const [address, setAddress] = useReducer(reducer, addressInitialData)

    return (
        <form className="addUser" onSubmit={submit}>
            <nav className="nav">
                <div className="item profile active">
                    <span>۱</span>
                    <div>
                        <span className="title">پروفایل</span>
                        <span className="description">اطلاعات شخصی کاربر</span>
                    </div>
                </div>
                <div className="item account">
                    <span>۲</span>
                    <div>
                        <span className="title">حساب کاربری</span>
                        <span className="description">تنطیمات حساب کاربری کاربر</span>
                    </div>
                </div>
                <div className="item address">
                    <span>۳</span>
                    <div>
                        <span className="title">آدرس</span>
                        <span className="description">آدرس کاربر</span>
                    </div>
                </div>
                <div className="item submission">
                    <span>۴</span>
                    <div>
                        <span className="title">افزودن</span>
                        <span className="description">بازبینی و اضافه کردن</span>
                    </div>
                </div>
            </nav>
            <div className="main">
                <div className="item profile active">
                                        
                </div>
                <div className="item account"></div>
                <div className="item address"></div>
                <div className="item submission"></div>
            </div>
            <div className="btns">
                <ButtonPrimary>بعدی</ButtonPrimary>
                <ButtonSecondary>قبلی</ButtonSecondary>
            </div>
        </form>
    )
}