import { Navigate } from "react-router-dom";
import { getSession } from "../lib/storage";
export default function ProtectedRoute({role,children}){const user=getSession();if(!user)return <Navigate to="/login" replace/>;if(user.role!==role)return <Navigate to={user.role==="admin"?"/admin":"/dashboard"} replace/>;return children;}