import { ADD_VOITURE,DELETE_VOITURE,DELETE_ALL_VOITURES,UPDATE_VOITURE } from "../Actions/VoitureActions/VoitureActionsTypes"

const initialState={
    voitures: JSON.parse(localStorage.getItem('voitures')) || [
        {id:1,titre:'titre de voiture1',text:'some description',position:{lat:34.020882,long:-6.841650},type:'V1',adress:'Rabat',prix:800,img:'01_mini_white.png'},
        {id:2,titre:'titre de voiture2',text:'some description',position:{lat:33.573110,long:-7.589843},type:'V2',adress:'Casablanca',prix:900,img:'02_economy_coolgrey.png'},
        {id:3,titre:'titre de voiture3',text:'some description',position:{lat:33.2544,long:-8.5069},type:'V2',adress:'EL Jadida',prix:1400,img:'02_economy_red.png'},
        {id:4,titre:'titre de voiture4',text:'some description',position:{lat:31.629472,long:-7.981084},type:'V1',adress:'Marrakech',prix:800,img:'02_economy_white.png'},
        {id:5,titre:'titre de voiture5',text:'some description',position:{lat:34.020882,long:-5.009445},type:'V3',adress:'Fès',prix:3100,img:'03_standard_black.png'},
        {id:6,titre:'titre de voiture6',text:'some description',position:{lat:35.76727,long:-5.777765},type:'V1',adress:'Tanger',prix:1700,img:'04_premium.png'},
    ]
}
const ReducerVoiture=(state=initialState,action)=>{
       switch (action.type) {
            case ADD_VOITURE:
                localStorage.setItem('voitures', JSON.stringify([...state.voitures,{...action.payload,id:state.voitures.length+1}]));
                return {...state,voitures:[...state.voitures,{...action.payload,id:state.voitures.length+1}]};
            case DELETE_VOITURE:
                localStorage.setItem('voitures', JSON.stringify([...state.voitures.filter((v)=>v.id!=action.payload)]));
                return {...state,voitures:[...state.voitures.filter((v)=>v.id!=action.payload)]};
            // case UPDATE_VOITURE:
            //     localStorage.setItem('voitures', JSON.stringify([...state.voitures.map((v)=>v.id==action.payload.id?payload:v)]));
            //     return {...state,voitures:[...state.voitures.map((v)=>v.id==action.payload.id?payload:v)]};
            // case DELETE_ALL_VOITURES:
            //     localStorage.setItem('voitures', JSON.stringify([]));
            //     return {...state,voitures:[]};
                                  
            default:
               return state
        }
    }
export default ReducerVoiture