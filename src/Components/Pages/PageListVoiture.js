import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { DECONNECT_USER } from "../../Actions/AuthentificationActions/AuthenActions";
import Header from "./includes/Header";
import Sidebar from "./includes/SideBar";
import { REMOVE_VOITURE } from "../../Actions/VoitureActions/VoitureActions";
import Swal from 'sweetalert2';


function ListVoiture(){
const navigate=useNavigate();
const dispatch=useDispatch();
const voitures= useSelector(state=>state.voitures.voitures)

const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Êtes-vous sûr?",
      text: "Cette action supprimera définitivement la voiture.",
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
        dispatch(REMOVE_VOITURE(id))
    }
  };

    return(<>
    <Header />
     <div className="flex w-full">

            <div  className="flex flex-col w-4/10">
            <Sidebar />
           
            </div>
   
    
    <div className="flex justify-center items-center flex-wrap w-full bg-gray-100">
    {
        voitures.map((v,i)=>{
            return(
            
                <div key={i} className="flex justify-between items-start w-64 flex-col p-5 m-2 rounded bg-white">
                    <div><img src={`./image/${v.img}`} /> </div>
                    <p><b>Voiture: </b>  {v.titre} </p>
                    <p><b>Adresse: </b> {v.adress}</p>
                    <p><b>Prix:  </b>{v.prix}$ </p>
                    <div className="flex justify-between items-start">
                    {/* <button className="bg-red-500 p-1 m-1 px-4 text-white text-xs self-end rounded" onClick={()=> handleDelete(v.id)}>Supprimer</button> */}
                    <button className="bg-orange-500 p-1 m-1   px-4 text-white text-xs self-end rounded"><Link to={`/voiture/${v.id}`}>Réserver</Link></button>
                    </div>
                </div>
            )
        })
    }

    </div>
   </div>
    
    </>)
}
export default ListVoiture