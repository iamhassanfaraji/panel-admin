import Pagination from "../../pagination"
import RowActionContainer from "../action/rowActions"
import ActionRender from "../action/actionRender"

const TableRow = ({ rowData, pattern, id }) => {
    const showTds = pattern.body.map((item) => {
        const { Component, targetDataId, props, key } = item
        return (
            <td key={key} >
                <Component value={rowData[targetDataId]} {...props} />
            </td>
        )
    })

    return (
        <tr key={rowData._id}>
            {showTds}
            <RowActionContainer actions={pattern.actions} id={id} />
        </tr>
    )
}

const TableRender = ({ pattern, data, header, ...props }) => {

    const tdThead = pattern.header.map((value, key) => {
        return <td key={key}>{value}</td>
    })

    return (
        <>
            <div className="header">
                {header}
            </div>
            {
                Object.values(data).length ? (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    {tdThead}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.data.map((row) => {
                                        return <TableRow key={row.id}
                                            id={row.id}
                                            rowData={row}
                                            pattern={pattern} />
                                    })
                                }
                            </tbody>
                        </table>
                        <Pagination totalPages={data.totalPages} />
                    </>
                ) :
                    "داده وجود ندارد"
            }
        </>
    )
}

const TableContainer = ({ accessData, params, ...props }) => {
    const data = accessData.read()
    
    const page = params.get("page")
    const type = params.get("type")

    if (type && !page) {
        return <ActionRender
            rowData={data[0]}
            type={type}
            accessData={accessData}
            {...props}
        />
    } else {
        return <TableRender data={data} {...props} />
    }

}


export default TableContainer