import LoginForm from "../../Components/LoginForm/LoginForm";
import Navbarr from '../../Components/Navbar/Navbar';
import styles from './LoginPage.module.css';
function LoginPage() {
  return (
    <div>
      <div className={styles.navbar}>
        <Navbarr />
      </div>
      <div className={`${styles.loginBox_FullDiv}`}>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
