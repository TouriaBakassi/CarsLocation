
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from "./includes/Header";
import Sidebar from "./includes/SideBar";
import Swal from 'sweetalert2';
function Dashboard(){

    const reservation= useSelector((state)=>state.reservation.reservation);
    const voitures= useSelector((state)=>state.voitures.voitures);
   
  return (<>
  
    <Header />
    <div className="flex items-start w-full">
           <div  className="flex flex-col w-4/10">
           <Sidebar />
           </div>
    <div className="flex flex-col justify-center items-center w-full" >
         <h1>Dashboard</h1>
         <h3>Annonces</h3>
         <table className='table-auto'>
            <thead>
                <tr>
                    <th>IDclient</th>
                    <th>Client</th>
                    <th>Ville</th>
                    <th>Voiture</th>
                    <th>Date Debut</th>
                    <th>Date Fin</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {reservation.map((res,i)=>{
                    const voiture= voitures.map((v)=>v.id==res.voiture)
                    return (<tr className='m-5' key={i}>
                            <td>{res.id}</td>
                            <td>{res.client}</td>
                            <td>{res.ville}</td>
                            <td>{voiture}</td>
                            <td>{res.dateDebut}</td>
                            <td>{res.dateFin}</td>
                            <td > 
                                <button  className='bg-blue-500 p-2 m-1'>Confirmer</button> 
                                <button  className='bg-red-500 p-2 m-1'>Supprimer</button> 
                            </td>    
                    </tr>)
                }) }
            </tbody>
         </table>
    </div>
    </div>
 
    </>);
}

export default Dashboard

