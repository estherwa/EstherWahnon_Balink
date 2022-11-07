import {ADD_TO_CART, UPDATE_CART, DELETE_FROM_CART, addToCart} from './actions/index'
const initialState ={
    quantity:0,
    count:0,
    cart:new Map()
    ,
}
export const cartReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.log("add to cart")
            const book = {
                ...action.payload,
                quantity: 1,
            }

            state.cart.size=1;
            state.cart.set(book.id,book);
            console.log(state.cart);
            return state;
        case UPDATE_CART:
            const bookToUpdated = state.cart?.get(action.payload.id)
            state.cart.quantity++;
            bookToUpdated.quantity++;
            state.cart?.set(action.payload.id, bookToUpdated);
            return state;
        case DELETE_FROM_CART:
            state.cart?.delete(action.payload.id)
            return state
        default:
            return state;
    }
}