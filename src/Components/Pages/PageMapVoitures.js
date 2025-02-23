import { useState } from "react";
import { useSelector } from "react-redux"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { Link } from "react-router-dom";
import Header from "./includes/Header";
import SidebarUser from "./includes/SideBarUser";
import Sidebar from "./includes/SideBar";

export default function MapVoiture(){
    const [position, setPosition] = useState([31.7917, -7.0926]);
    const [address, setAddress] = useState('');
    const [marker, setMarker] = useState(null);
    const voitures=useSelector(state=>state.voitures.voitures);
    
    const isloginAdmin  = useSelector((state) => state.authen.isLoginAdmin);

    const MyIcon= new Icon({
         iconUrl:"/placeholder.png",
         iconSize:[35,35]
       })
    const geocodeAddress = async () => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
          );
          const data = await response.json();
    
          if (data.length > 0) {
            const { lat, lon } = data[0];
            setPosition([parseFloat(lat), parseFloat(lon)]);
            setMarker([parseFloat(lat), parseFloat(lon)]);
          } else {
            alert('Address not found!');
          }
        } catch (error) {
          console.error('Error geocoding address:', error);
        }
    };
        
	




    return(<>
     <Header />
     <div className="flex ">
     {isloginAdmin ? (<Sidebar />):(<SidebarUser />) } 
    <MapContainer className="h-full" center={[voitures[0].position.lat,voitures[0].position.long]} zoom={6} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Marker for the searched location */}
            { voitures.map((v,i)=>{
 
              return (<Marker position={[v.position.lat,v.position.long]} icon={MyIcon}>
                    <Popup>
                            <div><img src={`/image/${v.img}`} /> </div>
                            <p><b>Voiture: </b>  {v.titre} </p>
                            <p><b>Adresse: </b> {v.adress}</p>
                            <p><b>Prix:  </b>{v.prix}$ </p>
                                            
                        <button className="bg-orange-500 p-2 px-4 text-white text-sm self-end rounded"><Link to={`/voiture/${v.id}`}>Voir l'offre</Link></button>
                                       
                    </Popup>
                </Marker>)  
  
            }) 
            }
          </MapContainer>

     </div>
   
    </>)
}