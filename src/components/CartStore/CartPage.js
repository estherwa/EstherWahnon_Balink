import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import{deleteItem} from "./"
import { useNavigate } from 'react-router-dom';
import {deleteItem} from "../../Reducers/actions";

let zero= 0

function Cart() {
    const [total,setTotal] = useState(zero)
    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    function deleteItemFromCart(product){
        dispatch(deleteItem(product))
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
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>🗑️</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        cart?.map((book)=>{
                            return(
                                <tr>
                                    <td><i className="badge badge-danger" onClick={()=>deleteItemFromCart(book)}>X</i></td>
                                    <td>{book.name}</td>
                                    <td>{book.price} $</td>
                                    <td>1 </td>
                                    <td onClick={()=>deleteItemFromCart(book)}>✖️</td>

                                </tr>
                            )
                        })

                    }
                    <tr>
                        <td colSpan="5">Total Price : {total} $</td>

                    </tr>
                    </tbody>

                </table>
            </div>
            <div  onClick={()=>navigate("/paymentStore")}>Proceed to payment</div>
        </div>


    )

}


export default Cart