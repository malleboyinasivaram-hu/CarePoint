import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
export default function App() {
  return <><Navbar/><main className="page-shell"><Routes>
    <Route path="/" element={<Navigate to="/services" replace />} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/services" element={<Product/>}/>
    <Route path="/dashboard" element={<ProtectedRoute role="user"><UserDashboard/></ProtectedRoute>}/>
    <Route path="/admin" element={<ProtectedRoute role="admin"><Admin/></ProtectedRoute>}/>
    <Route path="*" element={<div className="panel"><h2>Page not found</h2><a href="/services">Go to services</a></div>}/>
  </Routes></main><Footer/></>;
}