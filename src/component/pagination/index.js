import { memo } from "react";
import { useSearchParams, useNavigate } from 'react-router-dom'
import { LinkPrimary, ButtonPrimary } from "../button";

import './style.scss'

const Pagination = ({ totalPages }) => {

    const [params] = useSearchParams()
    const nav = useNavigate()

    const currentPage = Number(params.get('page'))
    const limit = Number(params.get("limit"))
    const buttons = [1]

    //set meddle Elements
    if (totalPages != 1) {
        for (let i = currentPage; i < currentPage + (limit - 2); i++) {
            if (currentPage + (limit - 2) >= totalPages) {

                for (let j = 1; j <= limit - 2; j++) {
                    buttons.splice(1, 0, totalPages - j)
                }
                break;

            } else if (currentPage !== 1) {
                buttons.push(i)
            } else {
                buttons.push(i + 1)
            }
        }
        // Last Elements
        buttons.push(totalPages)
    }


    return (
        <div id={'pagination'}>
            {
                totalPages != 1 ? <ButtonPrimary onClick={() => nav(-1)}>قبل</ButtonPrimary> : null
            }
            {
                buttons.map((value) => {
                    return <LinkPrimary
                        to={`?limit=${limit}&page=${value}`}
                        className={currentPage === value ? 'active' : ''}
                        key={value}>
                        {`${value}`}
                    </LinkPrimary>
                })
            }
            {
                totalPages != 1 ? <ButtonPrimary onClick={() => nav(1)}>بعد</ButtonPrimary> : null
            }
        </div>
    )
}

export default memo(Pagination)