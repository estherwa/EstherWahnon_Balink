
export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const UPDATE_CART = 'UPDATE_CART'

export const addToCart = (payload) => ({
    type:'ADD_TO_CART',
    payload:payload
})

export const deleteItem = (payload) => ({
    type:'DELETE_FROM_CART',
    payload:payload
})
export const updateCart = (payload) => ({
    type:'UPDATE_CART',
    payload:payload
})