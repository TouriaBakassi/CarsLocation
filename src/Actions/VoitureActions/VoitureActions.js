import { ADD_VOITURE, DELETE_VOITURE,UPDATE_VOITURE,DELETE_ALL_VOITURES} from './VoitureActionsTypes'



export const AJOUTER_VOITURE=(voiture)=>{
    return {type:ADD_VOITURE, payload:voiture}
}
export const EDIT_VOITURE=(voiture)=>{
    return {type:UPDATE_VOITURE, payload:voiture}
}
export const REMOVE_VOITURE=(id)=>{
    return {type:DELETE_VOITURE, payload:id}
}
export const REMOVE_ALL_VOITURE=()=>{
    return {type:DELETE_ALL_VOITURES,}
}