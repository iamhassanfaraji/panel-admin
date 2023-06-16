import { Suspense } from "react"
import { useSearchParams } from "react-router-dom"

import suspender from "../../suspender"
import Spinner from "../../spinner"
import TableContainer from "./renderTable"
import dataLoader from "./dataloader"

import "../style.scss"

function reducer(state, action) {
    const { key, value } = action
    const prevState = state
    prevState[key] = value
    return prevState
}

const TableData = (props) => {
    const [searchParams] = useSearchParams()
    const option = {
        api: props.api,
        searchParams: searchParams
    }
    const accessData = suspender(dataLoader(option), reducer)

    return (
        <Suspense fallback={<Spinner />}>
            <TableContainer
                accessData={accessData}
                params={searchParams}
                {...props}
            />
        </Suspense>
    )
}

export default TableData