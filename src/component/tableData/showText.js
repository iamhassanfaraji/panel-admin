import { useState, useEffect } from "react";
import { TextInput } from "../input";

const EditText = ({ value, label, idOfDataMainState, saveOnMainState, dataId, placeholder, children, disabled}) => {
    const [input, setInput] = useState(value)

    useEffect(() => {
        saveOnMainState({ id: idOfDataMainState, value: input, key: dataId })
    }, [input])

    return (
        <>
            {
                children ? children : null
            }
            <TextInput
                initialValue={value}
                setInTarget={setInput}
                label={label}
                placeholder={placeholder}
                disabled={disabled ? true : false}
                className={'item show-text'}
            />
        </>
    )
}

const ShowText = ({ value }) => {
    return (
        <>{value ? value : "داده وجود ندارد"}</>
    )
}
export { ShowText, EditText }