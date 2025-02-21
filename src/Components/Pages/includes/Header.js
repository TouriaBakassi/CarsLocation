import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { DECONNECT_USER } from "../../../Actions/AuthentificationActions/AuthenActions";



export default function Header(){
	const dispatch = useDispatch();
	const navigate=useNavigate();
    const admin= useSelector(state=>state.authen.admin);  
	const isloginAdmin  = useSelector((state) => state.authen.isLoginAdmin);

	const handleDeconect=()=>{
	    dispatch(DECONNECT_USER())
	    navigate('/login');
		}

    return(<>
		{ isloginAdmin ? (<div className="flex-1">
		<div className="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6">
			<form action="" className="w-full max-w-md">
				<div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
					<svg className="w-5 h-5 absolute ml-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					<input type="text" name="search" placeholder="Search talk" autocomplete="off" aria-label="Search talk" className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"/>
				</div>
			</form>
			
			<div className="relative flex-shrink-0 flex items-center justify-between"> 
                <p> {admin[0].nom} </p> <div className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                <img className="inline w-10 h-10 rounded-full" src="https://picsum.photos/150" alt=""/>
          </div>
			</div>
		</div>
		<main></main>
	</div>) : (<div className="flex justify-between items-center p-3 "> 
		 <h1 className="text-green-600 text-xl font-medium">Voitures Disponibles </h1>
			<button type="button" className='bg-red-500 p-3 rounded m-1' onClick={handleDeconect}>Déconnexion</button> 
		</div> )  }
    
    </>)
}