import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { DECONNECT_USER } from "../../Actions/AuthentificationActions/AuthenActions";



function ListVoiture(){
const navigate=useNavigate();
const dispatch=useDispatch();
const voitures= useSelector(state=>state.voitures.voitures)
const handleDeconect=()=>{
    dispatch(DECONNECT_USER())
    navigate('/login');
}
    return(<>
    <button type="button" className='bg-red-700 p-3 float-end' onClick={handleDeconect}>Déconnexion</button>

    {
        voitures.map((v,i)=>{
            return(
                <div key={i}>
                    <p>{v.titre} </p>
                    <p>{v.text}</p>
                    <p>{v.prix}</p>
                    <p>{v.type}</p>
                    <button><Link to={`/voiture/${v.id}`}>Détail</Link></button>
                </div>
            )
        })
    }
    
    </>)
}
export default ListVoiture