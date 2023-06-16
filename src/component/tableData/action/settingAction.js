import { useState } from "react"

import ActionHOC from "./actionHOC"
import check from '../../../assets/images/check.png'


const SettingAction = ({ rowData }) => {
    const [status, setStatus] = useState(rowData.status)

    return (
        <ActionHOC
            primaryBtn={'ذخیره'}
            secondaryBtn={'بازگشت'}>
            <div className="setting">
                <span>
                    فعال
                </span>
                <div className="nav" onClick={() => setStatus(status == 'فعال' ? 'غیر فعال' : 'فعال')}>
                    <span className={`bullet ${status == 'فعال' ? 'active' : null}`}>
                        <img src={check} />
                    </span>
                </div>
                <span>
                    غیر فعال
                </span>
            </div>
        </ActionHOC>
    )
}

export default SettingAction