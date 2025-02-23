import { ADD_RESERVATION,DELETE_RESERVATION,UPDATE_RESERVATION,DELETE_ALL_RESERVATION, CONFIRMATION_RESERVATION } from "../Actions/ReservationActions/ReservationActionsTypes";

const initialState={
    reservation: JSON.parse(localStorage.getItem('reservation'))|| [
        {id:1,client:'sara',ville:'tanger',voiture:2,dateDebut:'20/02/2025',dateFin:'25/02/2025',etat:'confirmer'},
        {id:2,client:'sara',ville:'casablanca',voiture:1,dateDebut:'27/02/2025',dateFin:'28/02/2025' ,etat:'supprimer'},
        {id:3,client:'sara',ville:'rabat',voiture:3,dateDebut:'01/03/2025',dateFin:'10/03/2025',etat:'en attente'},
    ],
    notifications:JSON.parse(localStorage.getItem('notifications'))|| [{user : 1, id:1,mssg:"Votre réservation est confirmé !",dateNot:"23/02/25"}]
}

const ReducerReservation=(state=initialState,action)=>{
    
    switch (action.type) {
        
        case ADD_RESERVATION:
            localStorage.setItem('reservation', JSON.stringify([...state.reservation,{...action.payload,id:state.reservation.length+1}]));
            return {...state,reservation:[...state.reservation,{...action.payload,id:state.reservation.length+1}]};
            
        case DELETE_RESERVATION:
            localStorage.setItem('reservation', JSON.stringify([...state.reservation.filter((v)=>v.id!=action.payload)]));
                return {...state,reservation:[...state.reservation.filter((v)=>v.id!=action.payload)]};
            case UPDATE_RESERVATION:
            // return {...state,reservation:[...state.reservation.map((res)=>res.id==action.payload.id?payload:res)]};
        case DELETE_ALL_RESERVATION:
            return {...state,reservation:[]};
        case CONFIRMATION_RESERVATION :
            localStorage.setItem('notifications', JSON.stringify([...state.notifications,{user: action.payload,id:state.notifications.length+1,mssg:"Votre réservation est confirmé !",dateNot: new Date().toLocaleDateString()}]));
            return {...state,reservation:[...state.notifications,{user: action.payload, id:state.notifications.length+1,mssg:"Votre réservation est confirmé !",dateNot: new Date().toLocaleDateString()}]};
                           
        default:
           return state
    }

}
export default ReducerReservation