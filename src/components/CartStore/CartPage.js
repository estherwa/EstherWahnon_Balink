import React, {useEffect, useReducer, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './style.css'
import { useNavigate } from 'react-router-dom';
import {deleteItem} from "../../Reducers/actions";
import {cartReducer} from "../../Reducers";
import {parseArrayFromMap} from "../../utils/array";
let zero= 0
function Cart() {
    const [total,setTotal] = useState(zero)
    const [amount,setAmount] = useState(zero)
    const cart = useSelector((state)=> state.cart);
    const [ dispatch]= useReducer(cartReducer, {count:0})
    let navigate = useNavigate();
    function deleteItemFromCart(product){
        dispatch(deleteItem(product))
    }
    function checkAmount(){
           if(total===0)
               alert("You haven't chosen any books, please return to the main page")
            else
                navigate("/paymentStore");
    }
    function totalToPay(){
        let counter = 0
        cart?.forEach((book)=>{
            counter = counter + book.quantity*book.price
        })

        console.log("counter", counter)
        setTotal(counter)
    }
    useEffect(()=>{
        totalToPay();
    },[cart])
    return (
        <div className="row">
            <div className="col-md-12">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Subtract</th>
                        <th>Quantity</th>
                        <th>Add</th>
                        <th>🗑️</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        parseArrayFromMap(cart)?.map( (cart)=> <tr>
                                    <td className="name" >{cart.name}</td>
                                    <td className="price">{cart.price} $</td>
                                    <td  onClick={()=> {
                                        if(cart.quantity !== 1)
                                        {
                                            cart.quantity--;
                                            setAmount(cart.quantity);
                                            totalToPay();
                                        }

                                    }}>➖</td>
                                    <td className="quantity">{cart.quantity}</td>
                                    <td onClick={()=>{cart.quantity++;
                                            setAmount(cart.quantity)
                                            totalToPay() }}>➕</td>
                                    <td onClick={()=>deleteItemFromCart(cart)}>🗑️</td>
                                </tr>
                            )
                    }
                        <tr>
                             <td className="totalPrice" colSpan="5">Total Price : {total} $</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="payment"  onClick={checkAmount}>Proceed to payment</div>
        </div>
    )
}
export default Cart