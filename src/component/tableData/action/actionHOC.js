import { useNavigate } from "react-router-dom"
import { ButtonPrimary, ButtonSecondary } from "../../button"

const ActionHOC = ({ children, saveAction, primaryBtn, secondaryBtn }) => {
    const nav = useNavigate()

    return (
        <div className="editor">
            <div className="editor-container">
                {children}
                <div className="item btns-editor">
                    <ButtonPrimary onClick={saveAction}>{primaryBtn}</ButtonPrimary>
                    <ButtonSecondary onClick={() => { nav(-1) }}>{secondaryBtn}</ButtonSecondary>
                </div>
            </div>
        </div>
    )
}


export default ActionHOC