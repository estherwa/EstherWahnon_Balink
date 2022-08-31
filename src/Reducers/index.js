import {ADD_TO_CART,UPDATE_CART,DELETE_FROM_CART} from './actions/index'
const initialState ={
    cart:[],
}
export const orederReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TO_CART:
            return{...state,cart:[...state.cart,action.payload]}
        case UPDATE_CART:
            return{...state,cart:[...state.cart?.map((v)=>{
                    if(v.id==action.payload.id){
                        v.quantity++
                        return v}
                    else{return v}})]}
        case DELETE_FROM_CART:
            return {...state, cart:state.cart?.filter((v)=>v.id!=action.payload.id)}
        default:
            return state;
    }
}