import { useEffect } from "react";
import { useAuth } from "../Contexts/AuthUserProvider"
import { useNavigate } from "react-router-dom";

function ProtectRoute({ children }) {
    let { isAuthenticated } = useAuth();
    let navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated)
            navigate("/");
    }, [isAuthenticated,navigate]);

    return children;
}

export default ProtectRoute;
