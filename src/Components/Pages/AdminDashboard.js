
import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Header from "./includes/Header";
import Sidebar from "./includes/SideBar";
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import { CONFIRM_RESERVATION, REMOVE_RESERVATION } from '../../Actions/ReservationActions/ReservationActions';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard(){

    const reservation= useSelector((state)=>state.reservation.reservation);
    const voitures= useSelector((state)=>state.voitures.voitures);
    const dispatch=useDispatch();
    const navigate=useNavigate()
const handleDelete = async (id) => {
        const result = await Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Cette action supprimera définitivement la reservation.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Supprimer",
      cancelButtonText: "Annuler",
      customClass: {
      popup: "swal2-custom-small", 
      },
    });

    if (result.isConfirmed) {
        dispatch(REMOVE_RESERVATION(id))
    }
  };

  const handleConfirm = async (user) => {
    const result = await Swal.fire({
  title: "Êtes-vous sûr?",
  text: "Cette action confirme définitivement la reservation.",
  icon: "success",
  showCancelButton: true,
  confirmButtonColor: "#4eb160",
  cancelButtonColor: "#3085d6",
  confirmButtonText: "Confirmé",
  cancelButtonText: "Annuler",
  customClass: {
  popup: "swal2-custom-small", 
  },
});
const notifySuccess = () => toast.success("La confirmation est faite avec success ");
if (result.isConfirmed) {
    dispatch(CONFIRM_RESERVATION(user))
    notifySuccess();
    
}
};
  return (<>
  
    <Header />
    <div className="flex items-start w-full">
           <div  className="flex flex-col w-4/10">
           <Sidebar />
           </div>
    <div className="flex flex-col justify-center items-center w-full" >
        <div className='w-full p-7 flex justify-between'>
        <h1>Dashboard</h1>
        <h3 >Annonces</h3>
        </div>
         <ToastContainer />
         <table className='table-auto'>
            <thead>
                <tr>
                    <th>IDclient</th>
                    <th>Client</th>
                    <th>Ville</th>
                    <th>Voiture</th>
                    <th>Date Debut</th>
                    <th>Date Fin</th>
                    <th>Etat</th>
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
                            <td>{res.etat}</td>
                            <td > 
                                <button onClick={()=> handleConfirm(res.client)} className='bg-blue-500 p-2 m-1' >Confirmer</button> 
                                <button  className='bg-red-500 p-2 m-1' onClick={()=> handleDelete(res.id)}>Supprimer</button> 
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

