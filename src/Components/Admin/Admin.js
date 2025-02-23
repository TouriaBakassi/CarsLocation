import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADMIN_CONNEXION } from '../../Actions/AuthentificationActions/AuthenActions';
import { ToastContainer, toast } from 'react-toastify';


function AdminLogin() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const isloginAdmin  = useSelector((state) => state.authen.isLoginAdmin);
  const notify = () => toast.error("Email or Password Incorrect ");
  useEffect(() => {

    if (isloginAdmin) {
      navigate('/Dashboard');
    }
  }, [navigate, isloginAdmin]);



  

  const handleSubmit =  (e) => {
    e.preventDefault();
   const disp= dispatch(ADMIN_CONNEXION({email:email,password:password}));
    console.log(password);
    console.log('login : ' + isloginAdmin);
    disp && navigate('/');
    if (!isloginAdmin) {
      notify();
      setEmail('');
      setPassword('');
      navigate('/')
    }
  };

  return (<>
  
  
    <div className="flex justify-center items-center mt-6 bg-gray-100 w-full">
      
      <div className="flex justify-center items-center flex-col mt-5 p-5 w-12/6">
        <h1 className="">ADMIN CONNEXION</h1>
        <h5 className='text-center text-sm' >Bienvenue, Veuillez saisir vos informations</h5>
        <ToastContainer />
        <form className='pt-4' onSubmit={handleSubmit}>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      

        <div class="sm:col-span-12">
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Address Email</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" onChange={(e)=>setEmail(e.target.value)} autocomplete="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
        </div>
        <div class="sm:col-span-12">
          <label for="pass" class="block text-sm/6 font-medium text-gray-900">Mot de Passe</label>
          <div class="mt-2">
            <input type="password" name="pass" id="pass" onChange={(e)=>setPassword(e.target.value)} autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
          </div>
        </div>
          </div>
          <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="reset" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Connexion</button>
  </div>
          {/* <p className='mt-5 text-sm'>
            Vous n'avez pas de compte ?
            <a href="/Register" className="text-blue-400 visited:text-purple-300"> Créer un compte</a>
          </p> */}
        </form>
      </div>
      <div className=' w-12/6'>
        <img src='/image/proxy-image.jpeg' alt='cars'  className='w-full'/>
      </div>
    </div>
   
    </>
  );
}

export default AdminLogin;