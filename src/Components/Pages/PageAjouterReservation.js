
import React, { useState } from 'react';

import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import Sidebar from "./includes/SideBar";
import Header from "./includes/Header";
import { AJOUTER_RESERVATION } from '../../Actions/ReservationActions/ReservationActions';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import SidebarUser from './includes/SideBarUser';


export default function AjouterReservation(){

      const dispatch=useDispatch()
      const userConnecter=useSelector((state)=>state.authen.userConnecter);
      const [ville, setVille] = useState('');
      const [dateDebut, setDateDebut] = useState('');
      const [dateFin, setDateFin] = useState('');
      const {id}=useParams();
     
      
      const isloginAdmin  = useSelector((state) => state.authen.isLoginAdmin);
      const voiture=useSelector(state=>state.voitures.voitures.find(v=>v.id==id))
      
        
      const notifySuccess = () => toast.success("La reservation est ajouter avec success ");
      const notifyError = () => toast.error("Remplir tous les champs !");

      const handleSubmit =  (e) => {
            e.preventDefault();
            if (userConnecter && ville && voiture && dateDebut && dateFin ) {
             dispatch(AJOUTER_RESERVATION({client:userConnecter.id,ville:ville,voiture:voiture.id,dateDebut:dateDebut,dateFin:dateFin,etat:'en attente' }));
                notifySuccess();
                // setUser(null);
                
            }else{
                notifyError();
            }
            
          };



          

    return(<>
    
    <Header />

    <div className="flex ">
         {isloginAdmin ? (<Sidebar />):(<SidebarUser />) } 
    <div className="flex w-full">
       
    <div className="flex justify-center items-start  bg-gray-100 w-full">
      <ToastContainer />
      <div className="flex justify-between items-start flex-col mt-5 p-5 w-12/6">
        <h1 className=" text-orange-600 text-xl font-medium">Ajouter Reservation</h1>
        <h5 className='text-sm' >Veuillez saisir vos informations</h5>
        
        <form className='w-full pt-4' onSubmit={handleSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        <div className="sm:col-span-12 flex justify-between items-center">
          <label for="user" className="block text-sm/6 font-medium text-gray-900  mx-1">User </label>
          <div className="mt-2">
            <input disabled value={userConnecter.nom}  id="user" name="user" type="text"  autocomplete="user" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
          <label for="voiture" className="block text-sm/6 font-medium text-gray-900 mx-1">Voiture</label>
          <div className="mt-2">
          <input disabled value={voiture.titre} id="voiture" name="voiture" type="text" autocomplete="voiture" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>

          </div>
          <label for="Ville" className="block text-sm/6 font-medium text-gray-900 mx-1">Ville</label>
          <div className="mt-2">
            <input value={ville} id="Ville" name="Ville" type="text" onChange={(e)=>setVille(e.target.value)} autocomplete="Ville" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
        </div>

        <div className="sm:col-span-12 flex justify-between items-center">
        <label for="dateDebut" className="block text-sm/6 font-medium text-gray-900 mx-1">Date Début</label>
          <div className="mt-2">
          <input value={dateDebut} id="dateDebut" name="dateDebut" type="date" onChange={(e)=>setDateDebut(e.target.value)} autocomplete="dateDebut" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
        <label for="dateFin" className="block text-sm/6 font-medium text-gray-900 mx-1">Date Fin</label>
          <div className="mt-2">
            <input value={dateFin} id="dateFin" name="dateFin" autocomplete="dateFin" type="date" onChange={(e)=>setDateFin(e.target.value)}  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
       
      
        
       
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="reset" className="text-sm/6 font-semibold text-gray-900">Annuler</button>
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Ajouter</button>
  </div>
        
        </form>
      </div>
      {/* {isVisible && (
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
      )} */}
    </div>

</div>

    </div>
    
    
    
    
    
    
    </>)
}




