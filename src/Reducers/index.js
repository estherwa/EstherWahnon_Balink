import {ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART, addToCart} from './actions/index'
import {parseArrayFromMap} from "../utils/array";
import {useSelector} from "react-redux";

const initialState ={
    quantity:0,
    count:0,
    cart:new Map(),
}

export const cartReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.log("add to cart")
            const book = {
                ...action.payload,
                quantity: 1,
            }
            action.payload.quantity=1;
            state.cart.set(action.payload.id,book);
            console.log(state.cart);
            return {
                ...state
            };
        case UPDATE_CART:
            const bookToUpdated = state.cart?.get(action.payload.id)
            bookToUpdated.quantity++;
            state.cart?.set(action.payload.id, bookToUpdated);
            console.log(state.cart);
            return state;
        case DELETE_FROM_CART:
            console.log("delete")
            state.cart.delete(action.payload.id)
            return {
                ...state,
                cart: state.cart
            };
        default:
            return state;
    }
}