import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { INSCRIPTION } from '../../Actions/AuthentificationActions/AuthenActions';
import { ToastContainer, toast } from 'react-toastify';
  



function UserRegister() {
  
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors,setErrors]=useState({errorNom:''});
  const [valide,setValide]=useState(true)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


//   const isloginUser  = useSelector((state) => state.authen.isLoginUser);

//   useEffect(() => {

//     if (isloginUser) {
//       navigate('/login');
//     }
//   }, [navigate, isloginUser]);


  const notify = () => toast.info("It's Done !! ", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    
    });

  const handleSubmit =  (e) => {
    e.preventDefault();
    if(nom.trim()==''){
      setErrors({...errors,errorNom:'Veuillez saisir un nom !'});
      setValide(false);
    }else{
      setErrors({...errors,errorNom:''});
      setValide(true);
    }
    if(email.trim()==''){
      setErrors({...errors,errorEmail:'Veuillez saisir un email !'});
      setValide(false);
    }else if(!email.match(/^\S+@\S+\.\S+$/)){
      setErrors({...errors,errorEmail:'Saisir un email correct !'});
      setValide(false);
    }else{
      setErrors({...errors,errorEmail:''});
      setValide(true);
    }

    if(password.trim()==''){
      setErrors({...errors,errorPass:'Veuillez saisir un mot de passe !'});
      setValide(false);
    }else{
      setErrors({...errors,errorPass:''});
      setValide(true);
    }
    if(nom && email && password){
      dispatch(INSCRIPTION({nom:nom,email:email,password:password}));
      setNom('');setEmail('');setPassword('');
      notify();
    }
  };
 
  return (
    <div className="">
      <div className="flex justify-center items-center flex-col mt-5">
        <h1 className="">INSCRIPTION</h1>
        <h5 className='text-center text-sm' >Bienvenue, Veuillez saisir vos informations</h5>
        <ToastContainer type='success' />
        <form className='pt-4' onSubmit={handleSubmit}>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-6">
          <label for="nom" class="block text-sm/6 font-medium text-gray-900">Nom Complet</label>
          <div class="mt-2">
            <input id="nom" name="nom" value={nom} type="text" onChange={(e)=>setNom(e.target.value)} autocomplete="nom" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
            <p className='text-red-600 text-sm'>{!valide && errors.errorNom} </p>
          </div>
        </div>

        <div class="sm:col-span-6">
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Address Email</label>
          <div class="mt-2">
            <input required id="email" value={email} name="email" type="email" onChange={(e)=>setEmail(e.target.value)} autocomplete="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
            <p className='text-red-600 text-sm'>{!valide && errors.errorEmail} </p>
          </div>
        </div>
        <div class="sm:col-span-6">
          <label for="pass" class="block text-sm/6 font-medium text-gray-900">Mot de Passe</label>
          <div class="mt-2">
            <input  type="password" value={password} name="pass" id="pass" onChange={(e)=>setPassword(e.target.value)} autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
            <p className='text-red-600 text-sm'>{!valide && errors.errorPass} </p>
          </div>
        </div>
       
          </div>
          <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="reset" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
    <button type="submit" class="rounded-md bg-indigo-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Inscription</button>
  </div>
          <p className='mt-5 text-sm'>
            Vous voulez se connecter  ?
            <a href="/login" className="text-blue-400 visited:text-purple-300"> Connexion</a>
          </p>
        </form>
      </div>
      
    </div>
  );
}

export default UserRegister;