import { useState, useEffect } from "react"

import Select from "../../select"
import './style.scss'

const translate = {
    1: "فعال",
    0: "غیر فعال"
}

const EditStatus = ({ value, label, idOfDataMainState, saveOnMainState, dataId, disabled = false }) => {
    const [selected, setSelect] = useState(translate[value])
    const [preventFirstRun, setFlag] = useState(0)

    useEffect(() => {
        if (!disabled && preventFirstRun) {
            saveOnMainState({ id: idOfDataMainState, value: selected, key: dataId })
        }
        setFlag(1)
    }, [selected])

    return (
        <div className="item">
            <Select label={label} list={['فعال', 'غیر فعال']} select={selected} setSelect={setSelect} />
        </div>
    )
}


const ShowStatus = ({ value}) => {
    const status = translate[value]
    return (
        <p className={`status ${ status == 'فعال'? "success": "danger"}`}>{status}</p>
    )
}
export { ShowStatus, EditStatus }