import {ADD_RESERVATION, DELETE_RESERVATION,UPDATE_RESERVATION, DELETE_ALL_RESERVATION} from './ReservationActionsTypes'

export const AJOUTER_RESERVATION=(reservation)=>{
    return {type:ADD_RESERVATION, payload:reservation}
}
export const EDIT_RESERVATION=(reservation)=>{
    return {type:UPDATE_RESERVATION, payload:reservation}
}
export const REMOVE_RESERVATION=(id)=>{
    return {type:DELETE_RESERVATION, payload:id}
}
export const REMOVE_ALL_RESERVATION=()=>{
    return {type:DELETE_ALL_RESERVATION,}
}