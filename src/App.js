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
import AjouterReservation from "./Components/Pages/PageAjouterReservation";
import UserVoitures from "./Components/Pages/PageUserVoitures";
import UserNotification from "./Components/Pages/PageUserNotif";

function Application() {

 return <>
 <Routes>
   
    <Route  path="/"  element={<AdminLogin/>} />
    <Route  path="/login"  element={<UserLogin/>} />
    <Route  path="/register"  element={<UserRegister/>} />
    <Route  path="/map"  element={<MapVoiture />} />
    <Route  path="/voiture/:id"  element={<Voiture />} />  
    <Route  path="/reserver/:id"  element={<AjouterReservation />} />  
    <Route  path="/voitures"  element={<ListVoiture />} />
    <Route  path="/list"  element={<UserVoitures />} />
    <Route element={<ProtectedAdminRoute />}>
        <Route  path="/Dashboard"  element={<Dashboard/>} />
        <Route  path="/add"  element={<AjouterVoiture />} />
    </Route>
    
    <Route element={<ProtectedUserRoute />}>
        {/* <Route  path="/map"  element={<MapVoiture />} />
        <Route  path="/voiture/:id"  element={<Voiture />} />   */}
        <Route  path="/notification"  element={<UserNotification />} />
    </Route> 
    {/* <Route  path="*"  element={<PageNotFound />} /> */}
    
    
 </Routes>
 
 </>
}

export default Application


