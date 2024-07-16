import { createContext, useContext, useReducer } from "react"
import toast from "react-hot-toast";
let fakeUser = {
    name: "Javeria Kanwal",
    email: "javeriakanwal57@gmail.com",
    avaster: '/images/Javeria.png',
    password:"123456789"
}
let reducer = (state,action) =>
{
    switch (action.type)
    {
        case "login":
            return { ...state, User: fakeUser, isAuthenticated: true };
        case "logout":
            return { ...state, User: null, isAuthenticated: false }
        default:
            throw new Error("Invalid Action");
    }
    }
let AuthUser = createContext();

function AuthUserProvider({ children }) {
    let initialState = {
        User: null,
        isAuthenticated: false
    
    }
    let [{User, isAuthenticated }, dispatch] = useReducer(reducer, initialState);

    let login = (email,password) =>
    {
        if (email === fakeUser.email && password === fakeUser.password)
        {
            dispatch({ type: "login" });
            toast.success("Login Successfully");
            return true;
        }

        toast.error("Username or Password is Incorrect");
    }

    let logout = () =>
    {
        dispatch({ type: "logout" });
        toast.success("Logout Successfully");
    }
   

    return (
        <AuthUser.Provider value={{
            User,
            isAuthenticated,
            logout,
            login
        }}>
            {children}
        </AuthUser.Provider>
    );  
        
    
}

function useAuth()
{
    let context = useContext(AuthUser);
    if (!context) throw new Error("You want to access undefined data");
    return context;
}
export { AuthUserProvider, useAuth };
