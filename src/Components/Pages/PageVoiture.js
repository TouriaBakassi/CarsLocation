import React , { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import Header from "./includes/Header";

export default function Voiture(){
    const {id}=useParams();
    const voiture= useSelector(state=>state.voitures.voitures.find(v=>v.id==id))
   
     const MyIcon= new Icon({
          iconUrl:"/placeholder.png",
          iconSize:[38,38]
        })

    return(<>
    <Header />
    <div class="container flex justify-between items-center p-5" >
  <div class="text-start p-3" style={{ height: '80vh', width: '50%' }}>
    <div class="col-md-4">
      <img src={`/image/${voiture.img}`} class="img-fluid rounded-start" alt="..."  style={{width: '70%' }} />
    </div>
    <div class="p-3">
      <div class="card-body">
        <h5 class="card-title"><b>Voiture :</b> {voiture.titre}</h5>
        <p class="card-text"><b>Prix : </b>{voiture.prix}$</p>
        <p class="card-text"> <b>Informations :</b> <small class="text-body-secondary">{voiture.text}</small></p>
        <p><b>Type: </b> {voiture.type}</p>

        <button className="bg-blue-200 p-2 float-end m-2"><Link to={`/reserver/${id}`}> Réserver </Link></button>
        <button className="bg-green-200 p-2 float-end m-2"><Link to={'/map'}> Retour </Link></button>
      </div>
    </div>
  </div>

  <MapContainer center={[voiture.position.lat,voiture.position.long]} zoom={8} style={{ height: '80vh', width: '50%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marker for the searched location */}
         
            <Marker position={[voiture.position.lat,voiture.position.long]} icon={MyIcon}>
              <Popup>
                Address:{voiture.adress} <br /> Coordinates: {voiture.position.lat}, {voiture.position.long}
              </Popup>
            </Marker>
        </MapContainer>
</div>
    
    
    
    
    </>)
}