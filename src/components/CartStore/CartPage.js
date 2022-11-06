import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './style.css'
import { useNavigate } from 'react-router-dom';
import {deleteItem} from "../../Reducers/actions";
let zero= 0
function Cart() {
    const [total,setTotal] = useState(zero)
    const [amount,setAmount] = useState(zero)
    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch();
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
                        cart?.map((book)=>{
                            return(
                                <tr>
                                    <td className="name" >{book.name}</td>
                                    <td className="price">{book.price} $</td>
                                    <td  onClick={()=> {
                                        if(book.quantity !== 1)
                                        {
                                            book.quantity--;
                                            setAmount(book.quantity);
                                            totalToPay();
                                        }

                                    }}>➖</td>
                                    <td className="quantity">{book.quantity}</td>
                                    <td onClick={()=>{book.quantity++;
                                            setAmount(book.quantity)
                                            totalToPay() }}>➕</td>
                                    <td onClick={()=>deleteItemFromCart(book)}>🗑️</td>
                                </tr>
                            )
                        })
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