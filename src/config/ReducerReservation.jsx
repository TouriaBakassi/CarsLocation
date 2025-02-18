import { ADD_RESERVATION,DELETE_RESERVATION,UPDATE_RESERVATION,DELETE_ALL_RESERVATION } from "../Actions/ReservationActions/ReservationActionsTypes";

const initialState={
    reservation: JSON.parse(localStorage.getItem('reservation'))|| [],
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