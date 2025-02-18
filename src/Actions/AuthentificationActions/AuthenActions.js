
import {INSCRIPTION_USER, CONNEXION_ADMIN, CONNEXION_USER,DECONNEXION_USER,DECONNEXION_ADMIN } from './AuthenActionsTypes'

export const INSCRIPTION =(user)=>{
    return {type: INSCRIPTION_USER, payload: user}
}

export const USER_CONNEXION =(user)=>{
    return {type:  CONNEXION_USER, payload: user}
}

export const ADMIN_CONNEXION =(admin)=>{
    return {type: CONNEXION_ADMIN, payload: admin}
}

export const DECONNECT_USER =()=>{
    return {type: DECONNEXION_USER,}
}

export const DECONNECT_ADMIN =()=>{
    return {type: DECONNEXION_ADMIN,}
}