import React , { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import Header from "./includes/Header";
import Sidebar from "./includes/SideBar";
import SidebarUser from "./includes/SideBarUser";

export default function UserNotification(){
    const {id}=useParams();
    const voiture= useSelector(state=>state.voitures.voitures.find(v=>v.id==id))
   const userConnecter=useSelector((state)=>state.authen.userConnecter.id);
   const notifications=useSelector((state)=>state.reservation.notifications.filter((n)=>n.user == userConnecter));
   console.log(userConnecter);
   console.log(notifications);
   
    const isloginAdmin  = useSelector((state) => state.authen.isLoginAdmin);
     const MyIcon= new Icon({
          iconUrl:"/placeholder.png",
          iconSize:[38,38]
        })

    return(<>
    <Header />
    <div className="flex ">
    {isloginAdmin ? (<Sidebar />):(<SidebarUser />) } 
    <div class="container flex justify-between items-center p-5" >
    <div className="flex justify-center items-center flex-wrap w-full bg-gray-100">
    {
        notifications.map((n,i)=>{
            return(
            
                <div key={i} className="flex justify-between items-start w-64 flex-col p-5 m-2 rounded bg-white">
                   
                    <p><b>Notif: </b>  {n.mssg} </p>
                    <p><b>Date : </b> {n.dateNot}</p>
                    
                    
                </div>
            )
        })
    }

    </div>
    </div>
</div>
    
    
    
    
    </>)
}