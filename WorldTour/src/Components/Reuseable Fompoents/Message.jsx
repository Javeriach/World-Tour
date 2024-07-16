import Styles from "./Message.module.css";
function Message({ message }) {
    return (
        <div className={Styles.message}>
            {message}
        </div>
    )
}

export default Message;
