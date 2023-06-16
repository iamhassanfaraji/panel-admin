import { useContext, useState } from "react";
import { FilterContext } from "./filter";
import Select from "../../select";
import { useEffect } from "react";

export default function FilterByList(props) {
    const [state, setState] = useState("all")
    const setInFilter = useContext(FilterContext)
    
    useEffect(() => {
        setInFilter({ [props.filterName]: state })
    }, [state])

    return (
        <Select
            {...props}
            selectedItem={state}
            setParentSelect={setState}
        />
    )
}