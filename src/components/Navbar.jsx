import { Link, useNavigate } from "react-router-dom";
import { getSession, clearSession } from "../lib/storage";
export default function Navbar(){const user=getSession(),navigate=useNavigate();function logout(){clearSession();navigate("/login");}
return <header className="navbar"><Link className="brand" to="/services"><span className="brand-mark">✚</span> CarePoint</Link><nav><Link to="/services">Services</Link>{user&&user.role==="user"&&<Link to="/dashboard">My Dashboard</Link>}{user&&user.role==="admin"&&<Link to="/admin">Admin</Link>}{!user&&<><Link to="/login">Login</Link><Link className="nav-cta" to="/register">Register</Link></>}{user&&<button className="nav-logout" onClick={logout}>Logout</button>}</nav></header>}
