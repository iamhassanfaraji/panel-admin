import { useReducer } from "react";
import {
    TableData,
    ShowStatus,
    ShowText
} from '../../../component/tableData';

import { ButtonSecondary } from "../../../component/button";
import './style.scss'

const pattern = {
    header: ['کاربر', 'سطح کاربر', 'ایمیل', 'شماره تماس', 'آدرس', 'وضعیت', 'عملیات'],
    body: [
        { Component: ShowText, targetDataId: 'user', key: "user" },
        { Component: ShowText, targetDataId: 'level-user', key: "level-user" },
        { Component: ShowText, targetDataId: 'email', key: "email" },
        { Component: ShowText, targetDataId: 'phoneNumber', key: "phoneNumber" },
        { Component: ShowText, targetDataId: 'address', key: "address" },
        { Component: ShowStatus, targetDataId: 'status', key: "status" }
    ]
}

const api = {
    'delete': process.env.REACT_APP_URL + '/user/delete',
    update: process.env.REACT_APP_URL + '/user/update',
    readById: process.env.REACT_APP_URL + '/user/readById',
    read: process.env.REACT_APP_URL + '/user/read'
}

export default function UsersTable() {

    return (
        <div className={'dataBase'}>
            <div className="table-container">
                <h2>کاربران</h2>
                <TableData pattern={pattern}
                    api={api}
                    process={{ Component: Process }}
                    limitPagination={5}
                    filter={filter}
                />
            </div>
        </div>
    )
}