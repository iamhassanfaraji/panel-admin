import { useEffect, useState } from "react"

import { ButtonPrimary } from "../button"
import './link.scss'

const EditLink = ({ value, label, idOfDataMainState, saveOnMainState, dataId, disabled = false }) => {
    const [link, setLink] = useState(value)
    const [preventFirstRun, setFlag] = useState(0)

    useEffect(() => {
        if (!disabled && preventFirstRun) {
            saveOnMainState({ id: idOfDataMainState, value: link, key: dataId })
        }
        setFlag(1)
    }, [link])

    return (
        <div className="item show-link">
            <label>{label}: </label>
            <input type="text"
                value={link}
                onChange={(e) => {
                    setLink(e.target.value)
                }}
                disabled={disabled}
            />
        </div>
    )
}

function copyLink(e) {
    const beCopy = e.target.querySelector('.tooltip')
    const url = beCopy.textContent
    navigator.clipboard.writeText(url)
    beCopy.innerText = 'کپی شد!'
    setTimeout(() => {
        beCopy.innerText = url
    }, 1500)
}

const ShowLink = ({ value, innerHtml }) => {
    return (
        <ButtonPrimary onClick={copyLink} id={'containerTooltip'}>
            <span >
                {innerHtml}
                <p className="tooltip">{process.env.REACT_APP_MODE == 'production' ? process.env.REACT_APP_URL + '/' + value : value}</p>
            </span>
        </ButtonPrimary>
    )
}

export { ShowLink, EditLink }