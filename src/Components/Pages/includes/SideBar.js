import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { DECONNECT_ADMIN, DECONNECT_USER } from "../../../Actions/AuthentificationActions/AuthenActions";
export default function Sidebar(){

    const dispatch = useDispatch();
    const navigate=useNavigate();
    const admin= useSelector(state=>state.authen.admin);

    const handleDeconect=()=>{
    dispatch(DECONNECT_ADMIN())
    navigate('/');
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

			<Link to={'/voitures'} className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
				<svg className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
                {/* Les voitures que moi et les autres ajouter  */}
				Liste Voitures
			</Link>

			<Link to={'/add'}  className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
				<svg className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
				</svg>
				Ajouter Voiture
            </Link>

			<Link to={'/Dashboard'}  className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
				<svg className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
				</svg>
                {/* Les voitures que j'ai ajouter  */}
				Dashboard
            </Link>

			<Link to={'/Map'} className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
				<svg className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
				Map
			</Link>

			<Link to={'/MyVoitures'} className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
				<svg className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
				</svg>
				History
			</Link>

			<Link to={'/MyVoitures'} className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
				<svg className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
				</svg>
				Scheduled
			</Link>
		</div>
        <button type="button" className='bg-red-700 p-3 w-full' onClick={handleDeconect}>Déconnexion</button>
	</div>

	
</div>
    
    
    
    </>)
}

