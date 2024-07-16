import Styles from "./BackButton.module.css";


function BackButton({ onClick }) {
    return (
        <div onClick={onClick} className={Styles.BackButton}>
            &larr;BACK
        </div>
    )
}

export default BackButton;
