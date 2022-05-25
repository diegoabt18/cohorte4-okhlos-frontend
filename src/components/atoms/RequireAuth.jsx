import { Navigate, Outlet } from "react-router-dom";
import authServices from "../../api/services/authServices"

const RequireAuth = ({ allowedRoles }) => {
 
  const token= authServices.isLogin()
  
  console.log("aqui esta el token")
  console.log(token)
  // return auth.rol && allowedRoles.includes(auth.rol[0]) ? (
  return token? (
    (token.role==allowedRoles? <Outlet />: <Navigate to="/Unauthorized" /> )
    
  ) : <Navigate to="/" />
};

export default RequireAuth;
