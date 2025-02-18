import { INSCRIPTION_USER,CONNEXION_USER,CONNEXION_ADMIN ,DECONNEXION_USER,DECONNEXION_ADMIN} from "../Actions/AuthentificationActions/AuthenActionsTypes";

const initialState={
    admin: JSON.parse(localStorage.getItem('admin')) || [{id:1,nom:"touria",email:"touria@mail.com",password:'1234'}],
    users:JSON.parse(localStorage.getItem('users')) || [{id:1,nom:"maryam",email:"mary@mail.com",password:"2345"}],
    isLoginUser:JSON.parse(localStorage.getItem('isLoginUser')) || false,
    isLoginAdmin: JSON.parse(localStorage.getItem('isLoginAdmin')) ||false,
}

const ReducerAuthen=(state=initialState,action)=>{
    switch (action.type) {
        case INSCRIPTION_USER:
            localStorage.setItem('users', JSON.stringify([...state.users,{...action.payload,id:state.users.length+1}]));
            localStorage.setItem('isLoginUser', JSON.stringify(false))
            return {...state,users:[...state.users,{...action,id:state.users.length+1}]};

        case CONNEXION_USER:

            const user=state.users.find((u)=>u.email==action.payload.email && u.password==action.payload.password)
            
            if (user) {
                localStorage.setItem('isLoginUser', JSON.stringify(true))
                return {...state,isLoginUser:true} 
            }else{
                localStorage.setItem('isLoginUser', JSON.stringify(false))
                return {...state,isLoginUser:false} 
            }
        case CONNEXION_ADMIN:
            const admin=state.admin.find((u)=>u.email==action.payload.email && u.password==action.payload.password)
    
            if (admin) {
                localStorage.setItem('isLoginAdmin', JSON.stringify(true))
                return {...state,isLoginAdmin:true} 
            }else{
                localStorage.setItem('isLoginAdmin', JSON.stringify(false))
                return {...state,isLoginAdmin:false} 
            }
        case DECONNEXION_USER:
            localStorage.setItem('isLoginUser', JSON.stringify(false))
            return {...state,isLoginUser:false} 
        case DECONNEXION_USER:
            localStorage.setItem('isLoginAdmin', JSON.stringify(false))
                return {...state,isLoginAdmin:false} 
                         
        default:
           return state
    }

}
export default ReducerAuthen