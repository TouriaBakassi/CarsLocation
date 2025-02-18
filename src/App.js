import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminLogin from "./Components/Admin/Admin"
import Dashboard from "./Components/Pages/AdminDashboard"
import UserLogin from "./Components/User/UserLogin"
import ListVoiture from "./Components/Pages/PageListVoiture"
import UserRegister from "./Components/User/UserRegister"


function Application() {
  const isloginUser  = useSelector((state) => state.authen.isLoginUser);
  const isloginAdmin  = useSelector((state) => state.authen.isLoginAdmin);

  const navigate= useNavigate();
 return <>
 <Routes>
   
    <Route  path="/"  element={<AdminLogin />} />
    <Route  path="/login"  element={<UserLogin/>} />
    <Route  path="/register"  element={<UserRegister/>} />

    <Route  path="/Dashboard"  element={isloginAdmin ? <Dashboard /> : <Navigate to="/" replace />} />
    <Route  path="/Voitures"  element={isloginUser ? <ListVoiture />: <Navigate to="/login" replace />} />
 </Routes>
 
 </>
}

export default Application


