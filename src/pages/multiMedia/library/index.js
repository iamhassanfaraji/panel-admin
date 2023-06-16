import { useNavigate } from "react-router-dom";

import { Filter } from "../../../component/tableData/filter/filter";
import FilterByList from "../../../component/tableData/filter/filterByList"
import { ButtonSecondary, EditButton, SettingButton, DeleteButton } from "../../../component/button";
import {
    EditAction,
    SettingAction,
    DeleteAction,
    ShowLink,
    ShowPhoto,
    ShowStatus,
    ShowText,
    TableData
} from "../../../component/tableData"

const pattern = {
    header: ['محتوا', 'دسته بندی', 'لینک', 'سایز', 'alt', 'وضعیت', 'عملیات'],
    body: [
        { Component: ShowPhoto, targetDataId: 'dir', key: "photo" },
        { Component: ShowText, targetDataId: 'category', key: "category" },
        { Component: ShowLink, targetDataId: 'dir', key: "link", props: { innerHtml: 'لینک' } },
        { Component: ShowText, targetDataId: 'size', key: "size" },
        { Component: ShowText, targetDataId: 'alt', key: "alt" },
        { Component: ShowStatus, targetDataId: 'status', key: "status" }
    ],
    actions: [
        { button: <DeleteButton />, targetActionId: "delete" },
        { button: <EditButton />, targetActionId: "edit" },
        { button: <SettingButton />, targetActionId: "setting" }
    ]
}

const api = {
    'delete': process.env.REACT_APP_URL + '/statics/deleteById',
    update: process.env.REACT_APP_URL + '/statics/updateById',
    read: process.env.REACT_APP_URL + '/statics/read',
    readById: process.env.REACT_APP_URL + '/statics/readById'
}

const MultiMedia = () => {
    const nav = useNavigate()

    return (
        <div className={'dataBase'}>
            <div className="table-container">
                <h2>گالری چند رسانه</h2>
                
                <TableData
                    pattern={pattern}
                    api={api}
                    actions={{
                        "edit": EditAction,
                        "setting": SettingAction,
                        "delete": DeleteAction
                    }}
                    limitPagination={5}
                    header={
                        <>
                            <Filter>
                                <FilterByList menuList={{ 2: "تصویر", 1: "فیلم" }} label={"دسته بندی"} filterName={"category"} />
                                <FilterByList menuList={{ 1: "فعال", 0: "غیر فعال" }} label={"وضعیت"} filterName={"status"} />
                            </Filter>
                            <ButtonSecondary onClick={() => { nav('/statics/upload') }}>آپلود فایل</ButtonSecondary>
                        </>
                    }
                />
                
            </div>
        </div>
    )
}
export default MultiMedia   