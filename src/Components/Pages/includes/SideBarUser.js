import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import {  DECONNECT_USER } from "../../../Actions/AuthentificationActions/AuthenActions";
export default function SidebarUser(){

    const dispatch = useDispatch();
    const navigate=useNavigate();
    const admin= useSelector(state=>state.authen.admin);

    const handleDeconect=()=>{
	    dispatch(DECONNECT_USER())
	    navigate('/login');
		}

    return(<>
    <div className="flex min-h-screen bottom-0 top-16">
	<div className="w-64 bg-gray-50 border-r border-gray-200 pb-2">

		<div className="py-4 px-6 text-orange-500  text-xl text-center">
			<a href="/">
				Location Voiture
			</a>
		</div>

		<div className="mb-10">
			<h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
				Main
			</h3>

			<Link to={'/List'} className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
				<svg className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
                {/* Les voitures que moi et les autres ajouter  */}
				Liste Voitures
			</Link>

			

			<Link to={'/Map'} className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
            <svg className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
				</svg>
				Voitures en Map
			</Link>
            <Link to={'/notification'} className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
				<svg className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
				Notifications
			</Link>
			

			
		</div>
        <button type="button" className='bg-red-700 p-3 mt-20 w-full' onClick={handleDeconect}>Déconnexion</button>
	</div>

	
</div>
    
    
    
    </>)
}

