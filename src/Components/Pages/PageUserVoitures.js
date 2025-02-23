import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { DECONNECT_USER } from "../../Actions/AuthentificationActions/AuthenActions";
import Header from "./includes/Header";


import SidebarUser from "./includes/SideBarUser";
import { useState } from "react";
import { FILTRAGE_VOITURE } from "../../Actions/VoitureActions/VoitureActions";


function UserVoitures(){

    const [motcle,setMotcle]=useState('');
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const Allvoitures= useSelector(state=>state.voitures.voitures)
    const voituresFiltrer=useSelector(state=>state.voitures.VoituresFiltrer)

const voitures=voituresFiltrer?voituresFiltrer:Allvoitures
    const handleFiltrage=(e)=>{
        e.preventDefault();
        dispatch(FILTRAGE_VOITURE(motcle))
        setMotcle('')
    }

    return(<>
    <Header />
     <div className="flex w-full">

            <div  className="flex flex-col w-4/10">
            <SidebarUser />
        


            </div>
   
          
    <div className="flex justify-center items-center flex-wrap w-full bg-gray-100">
    <div>
                        {/* Filtrage */}

	<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
					<svg className="w-5 h-5 absolute ml-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					<input type="text" value={motcle} onChange={(e)=>setMotcle(e.target.value)} name="search" placeholder="Chercher par Ville, Prix.." autocomplete="off" aria-label="Search talk" className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"/>
	<button type="button" className="p-2 bg-orange-200 rounded m-1" onClick={handleFiltrage}>Filtre</button>
    </div>
	         
    </div>
        <div className="flex justify-center items-center flex-wrap w-full bg-gray-100">

        {
        voitures.map((v,i)=>{
            return(
            
                <div key={i} className="flex justify-between items-start w-64 flex-col p-5 m-2 rounded bg-white">
                    <div><img src={`./image/${v.img}`} /> </div>
                    <p><b>Voiture: </b>  {v.titre} </p>
                    <p><b>Adresse: </b> {v.adress}</p>
                    <p><b>Prix:  </b>{v.prix}DH </p>
                    <div className="flex justify-between items-start">
                   
                    <button className="bg-orange-500 p-1 m-1   px-4 text-white text-xs self-end rounded"><Link to={`/voiture/${v.id}`}>Réserver</Link></button>
                    </div>
                </div>
            )
        })
    }

        </div>
    

    </div>
   </div>
    
    </>)
}
export default UserVoitures