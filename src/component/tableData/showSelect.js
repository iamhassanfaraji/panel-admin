import { useEffect, useState } from "react"
import Select from "../select/select"

const EditSelect = ({value, idOfDataMainState, saveOnMainState, dataId, disabled=false})=>{
    const [select, setSelect] = useState(value)
    const [preventFirstRun, setFlag] = useState(0)
    
    useEffect(()=>{
        if(!disabled && preventFirstRun){
            saveOnMainState({id: idOfDataMainState, value:input, key: dataId})
        }
        setFlag(1)
    },[select])


    return (
        <div className="item">
            <Select list={list} select={select} setSelect={setSelect} label={'دسته بندی'} />
        </div>
    )
}



return EditSelect