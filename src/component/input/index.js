import { useState, useEffect } from 'react'
import './style.scss'

export function TextInput({initialValue, setInTarget, label, className, disabled=false, placeholder}){
    
    const [input, setInput] = useState(initialValue)
    const [preventFirstRun, setFlag] = useState(0)

    useEffect(() => {
        if (!disabled && preventFirstRun) {
            setInTarget(input)
        }
        setFlag(1)
    }, [input])

    return (
        <div className={`text-input ${className}`}>
            <label>{label}: </label>
            <input type="text"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value)
                }}
                placeholder={placeholder}
                disabled={disabled}
            />
        </div>
    )
}

export function TextAreaInput(){

}