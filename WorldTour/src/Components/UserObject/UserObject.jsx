import { useAuth } from "../../Contexts/AuthUserProvider";
import Javeria from "../../Images/Javeria.png";
import Styles from "./UserObject.module.css";
import Buttons from "../Reuseable Fompoents/Buttons";
import { useNavigate } from "react-router-dom";
function UserObject() {
    let { User, logout } = useAuth();
    let navigate = useNavigate();
    let logoutHandler = () =>
    {
        logout();
        navigate("/");
        console.log("I am called");
    }
    if (!User) return;
    let name = User.name.split(" ");
    console.log(name);
    return (
        <div className={`${Styles.logout_section} d-flex justify-content-evenly align-items-center p-1`}>
            <div className="d-flex h-50 justify-content-center align-items-center">
            <img src={Javeria} /> 
            <p className={`${Styles.User_greetings} mt-3`}>Welcome!! {name[0]}</p>
            <Buttons type="logout" onClick={logoutHandler}>LOGOUT</Buttons>

           </div>
        </div>
    )
}

export default UserObject
