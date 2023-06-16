import { memo } from "react";
import { useSearchParams } from "react-router-dom";


const RowActionContainer = ({ actions, id }) => {
    const [params, setParams] = useSearchParams()
    return (
        <td id={'editOption'} >
            {
               actions.map((action) => {
                    return (
                        <span key={action.targetActionId} onClick={() => setParams({ type:action.targetActionId, id:id })}>
                            {action.button}
                        </span>
                    )
                }) 
            }
        </td>
    )
}



export default memo(RowActionContainer)