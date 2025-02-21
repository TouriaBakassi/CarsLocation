import { ADD_RESERVATION,DELETE_RESERVATION,UPDATE_RESERVATION,DELETE_ALL_RESERVATION } from "../Actions/ReservationActions/ReservationActionsTypes";

const initialState={
    reservation: JSON.parse(localStorage.getItem('reservation'))|| [
        {id:1,client:'sara',ville:'tanger',voiture:2,dateDebut:'20/02/2025',dateFin:'25/02/2025',etat:'confirmer'},
        {id:2,client:'sara',ville:'casablanca',voiture:1,dateDebut:'27/02/2025',dateFin:'28/02/2025' ,etat:'supprimer'},
        {id:3,client:'sara',ville:'rabat',voiture:3,dateDebut:'01/03/2025',dateFin:'10/03/2025'},
    ],
}

const ReducerReservation=(state=initialState,action)=>{
    
    switch (action.type) {
        
        case ADD_RESERVATION:
    
            // return {...state,reservation:[...state.reservation,action.payload]};
            return {...state,reservation:[...state.reservation,action]};
        case DELETE_RESERVATION:
            // return {...state,reservation:[...state.reservation.filter((res)=>res.id!=action.payload)]};
            return {...state,reservation:[...state.reservation.filter((res)=>res.id!=action)]};
        case UPDATE_RESERVATION:
            // return {...state,reservation:[...state.reservation.map((res)=>res.id==action.payload.id?payload:res)]};
            return {...state,reservation:[...state.reservation.map((res)=>res.id==action?res:res)]};
        case DELETE_ALL_RESERVATION:
            return {...state,reservation:[]};
                              
        default:
           return state
    }

}
export default ReducerReservation