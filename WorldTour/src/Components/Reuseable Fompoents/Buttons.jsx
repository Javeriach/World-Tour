import Styles from './Buttons.module.css';
function Buttons({ children, type, onClick }) {
  return (
    <button className={`${Styles.Btn} ${Styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Buttons;
