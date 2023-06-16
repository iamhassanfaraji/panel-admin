import { createContext, useState } from "react"

import { ButtonPrimary } from "../../button"
import { useSearchParams } from "react-router-dom"

const FilterContext = createContext()

function reducer(params){
    const newState = {...params}

    for(let key in newState){
        if(newState[key] == "all"){
            delete newState[key]
        }
    }
    
    return newState
}

const Filter = ({ children }) => {
    const [state, setState] = useState({})
    const [searchParams, setSearchParams] = useSearchParams()
    const lastParams = Object.fromEntries([...searchParams])

    return (
        <div className={'searching'}>
            <FilterContext.Provider value={setState}>
                {children}
            </FilterContext.Provider>
            <ButtonPrimary onClick={()=>setSearchParams(reducer({...lastParams, ...state}))}>جستجو</ButtonPrimary>
        </div>
    )
}

export {Filter, FilterContext}