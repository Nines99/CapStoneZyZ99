import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

// see https://www.robinwieruch.de/react-router-private-routes/
function ProtectedRoute({ redirectPath = '/login', children }) {
    const {currentUser} = useUserContext()
    if (!currentUser.Email) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet/>;
}

export default ProtectedRoute