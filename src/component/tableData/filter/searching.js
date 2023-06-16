import { useContext } from "react"
import { FilterContext } from "./filter"
 
function Searching() {
    const setInFilter = useContext(FilterContext)
    
    return <input type="text" placeholder={'جستجو...'} onChange={(e) => setInFilter(e.target.value)} />
}

export default Searching
