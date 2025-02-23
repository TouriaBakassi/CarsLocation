import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import Sidebar from "./includes/SideBar";
import Header from "./includes/Header";
import { AJOUTER_VOITURE } from '../../Actions/VoitureActions/VoitureActions';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';


export default function AjouterVoiture(){
        const [titre, setTitre] = useState('');
        const [text, setText] = useState('');
        const [prix, setPrix] = useState(null);
        const [type, setType] = useState('');
        const [image, setImage] = useState(null);
        const [position, setPosition] = useState([31.7917, -7.0926]);
        const [address, setAddress] = useState('');
        const [marker, setMarker] = useState(null);
        const [isVisible, setIsVisible] = useState(false);
        const count=useSelector(state=>state.voitures.voitures.length)
        const dispatch=useDispatch()

        const handleFileChange = (e) => {
            const file = e.target.files[0];
            if (file) {
              setImage(URL.createObjectURL(file)); 
            }
          };
        const handleDownload = () => {
            if (image) {
              const link = document.createElement('a');
              link.href = image; 
              link.download = `voiture_${count+1}.png` 
              setImage(`voiture_${count+1}.png`);
              document.body.appendChild(link);
              link.click();  
              document.body.removeChild(link); 
            }
          };

        const MyIcon= new Icon({
            iconUrl:"/placeholder.png",
            iconSize:[38,38]
        })

        const geocodeAddress = async () => {
            try { const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
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

       const notifySuccess = () => toast.success("La voiture est ajouter avec success ");
       const notifyError = () => toast.error("Remplir tous les champs !");

          const handleSubmit =  (e) => {
            e.preventDefault();
            if (titre && text && address && position &&prix && type) {
             dispatch(AJOUTER_VOITURE({titre:titre,text:text,type:type,adress:address,prix:prix,img:image,
                                        position:{lat:position[0],long:position[1]} }));
                notifySuccess();
                setTitre('');
                setText('');
                setAddress('')
                setImage('')
                setPosition([]);
                setPrix(null);
                setType('')
            }else{
                notifyError();
            }
            
          };



          

    return(<>
    
    <Header />
    <div className="flex w-full">
        <div  className="flex w-4/10">
        <Sidebar />
        </div>
   
    <div className="flex justify-center items-center  bg-gray-100 w-full">
      <ToastContainer />
      <div className="flex justify-between items-start flex-col mt-5 p-5 w-12/6">
        <h1 className=" text-orange-600 text-xl font-medium">Ajouter Voiture</h1>
        <h5 className='text-sm' >Veuillez saisir les informations de votre voiture</h5>
        
        <form className='w-full pt-4' onSubmit={handleSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div className="sm:col-span-12 flex justify-between items-center">
          <label for="titre" className="block text-sm/6 font-medium text-gray-900  mx-1">Titre de Voiture </label>
          <div className="mt-2">
            <input value={titre} id="titre" name="titre" type="text" onChange={(e)=>setTitre(e.target.value)} autocomplete="titre" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
          <label for="prix" className="block text-sm/6 font-medium text-gray-900 mx-1">Prix Voiture</label>
          <div className="mt-2">
            <input value={prix} id="prix" name="prix" type="text" onChange={(e)=>setPrix(e.target.value)} autocomplete="prix" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>

        </div>

        <div className="sm:col-span-12 flex justify-between items-center">
        <label for="type" className="block text-sm/6 font-medium text-gray-900 mx-1">Type Voiture</label>
          <div className="mt-2">
            <select  id="type" name="type" type="text" onChange={(e)=>setType(e.target.value)} autocomplete="type"  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 
            -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 
            focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                <option value={type} disabled>--Select One--</option>
                <option value={'V1'}>V1</option>
                <option value={'V2'}>V2</option>
                <option value={'V3'}>V3</option>
                <option value={'V4'}>V4</option>
                <option value={'V5'}>V5</option>
            </select>
          </div>
        <label for="image" className="block text-sm/6 font-medium text-gray-900 mx-1">Photo Voiture</label>
          <div className="mt-2">
            <input value={image} id="image" name="image" autocomplete="image" type="file" onChange={handleFileChange}  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            {image && ( <button type='button' className='' onClick={handleDownload}>Download Image</button> )}
          </div>
        </div>
        <div className="sm:col-span-12">
        <label for="text" className="block text-sm/6 font-medium text-gray-900 mx-1">Description Voiture</label>
          <div className="mt-2">
            <textarea value={text} id="text" name="text" type="text" onChange={(e)=>setText(e.target.value)} autocomplete="text" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
            {/* <input /> */}
          </div>
        </div>
        <div className="sm:col-span-12">
          <label for="adress" className="block text-sm/6 font-medium text-gray-900 mx-1">Localisation Voiture</label>
          <div className="mt-2">
          <input  type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          <button className='p-2 bg-gray-200 m-1 rounded' type='button' onClick={geocodeAddress} > Cherche</button>          
          </div>
            <div className="map">
                <MapContainer center={position} zoom={6} style={{ height: '80vh', width: '100%' }}>
                        <TileLayer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {/* Marker for the searched location */}
                        {marker && (
                          <Marker position={marker} icon={MyIcon}>
                            <Popup>
                              Your searched location. <br /> Coordinates: {marker[0]}, {marker[1]}
                            </Popup>
                          </Marker>
                        )}
                      </MapContainer>
            </div>
        </div>
        
       
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="reset" className="text-sm/6 font-semibold text-gray-900">Annuler</button>
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ajouter</button>
  </div>
        
        </form>
      </div>
      {isVisible && (
        <div className="z-40 fixed top-16 left-1/2 transform -translate-x-1/2 w-96 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Ajout effectué avec succès !</span>
          </div>
        </div>
      )}
    </div>



    </div>
    
    
    
    
    
    
    </>)
}




