import ActionHOC from "./actionHOC"

const DeleteAction = (props) => {
    return (
        <ActionHOC
            primaryBtn={'تایید'}
            secondaryBtn={'انصراف'}>
            <p className="delete">آیابرای حذف کردن مطمئن هستید؟</p>
        </ActionHOC>
    )
}
export default DeleteAction