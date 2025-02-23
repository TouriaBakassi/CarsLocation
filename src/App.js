import {Route, Routes} from "react-router-dom";
import AdminLogin from "./Components/Admin/Admin"
import Dashboard from "./Components/Pages/AdminDashboard"
import UserLogin from "./Components/User/UserLogin"
import ListVoiture from "./Components/Pages/PageListVoiture"
import UserRegister from "./Components/User/UserRegister"
import ProtectedAdminRoute from "./Components/Pages/ProtectedAdminRoute";
import ProtectedUserRoute from "./Components/Pages/ProtectedUserRoute";
import PageNotFound from "./Components/Pages/PageNotFound";
import Voiture from "./Components/Pages/PageVoiture";
import AjouterVoiture from "./Components/Pages/PageAjouterVoiture";
import MapVoiture from "./Components/Pages/PageMapVoitures";
function Application() {

 return <>
 <Routes>
   
    <Route  path="/"  element={<AdminLogin/>} />
    <Route  path="/login"  element={<UserLogin/>} />
    <Route  path="/register"  element={<UserRegister/>} />

    <Route element={<ProtectedAdminRoute />}>
        <Route  path="/Dashboard"  element={<Dashboard/>} />
        <Route  path="/Voitures"  element={<ListVoiture />} />
        <Route  path="/voiture/:id"  element={<Voiture />} /> 
        <Route  path="/add"  element={<AjouterVoiture />} />
    </Route>
    
    <Route element={<ProtectedUserRoute />}>
        <Route  path="/map"  element={<MapVoiture />} />
        <Route  path="/voiture/:id"  element={<Voiture />} />  
    </Route> 
    <Route  path="*"  element={<PageNotFound />} />
    
    
 </Routes>
 
 </>
}

export default Application


