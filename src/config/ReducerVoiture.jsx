import { ADD_VOITURE,DELETE_VOITURE,DELETE_ALL_VOITURES,UPDATE_VOITURE } from "../Actions/VoitureActions/VoitureActionsTypes"

const initialState={
    voitures:JSON.parse(localStorage.getItem('voitures'))||[
        {id:1,titre:'titre de voiture1',text:'some description',position:{lat:99.88,long:77.86},type:'V1',adress:'adress de voiure',prix:800,},
        {id:2,titre:'titre de voiture2',text:'some description',position:{lat:29.88,long:27.86},type:'V2',adress:'adress de voiure',prix:900,},
        {id:3,titre:'titre de voiture3',text:'some description',position:{lat:39.88,long:47.86},type:'V2',adress:'adress de voiure',prix:1400,},
        {id:4,titre:'titre de voiture4',text:'some description',position:{lat:49.88,long:37.86},type:'V1',adress:'adress de voiure',prix:800,},
        {id:5,titre:'titre de voiture5',text:'some description',position:{lat:59.88,long:87.86},type:'V3',adress:'adress de voiure',prix:3100,},
        {id:6,titre:'titre de voiture6',text:'some description',position:{lat:79.88,long:67.86},type:'V1',adress:'adress de voiure',prix:1700,},
    ]
}
const ReducerVoiture=(state=initialState,action)=>{
       switch (action.type) {
            case ADD_VOITURE:
                // return {...state,voitures:[...state.voitures,action.payload]};
                return {...state,voitures:[...state.voitures,action]};
            case DELETE_VOITURE:
                // return {...state,voitures:[...state.voitures.filter((v)=>v.id!=action.payload)]};
                return {...state,voitures:[...state.voitures.filter((v)=>v.id!=action)]};
            case UPDATE_VOITURE:
                // return {...state,voitures:[...state.voitures.map((v)=>v.id==action.payload.id?payload:v)]};
                return {...state,voitures:[...state.voitures.map((v)=>v.id==action ?v:v)]};
            case DELETE_ALL_VOITURES:
                return {...state,voitures:[]};
                                  
            default:
               return state
        }
    }
export default ReducerVoiture