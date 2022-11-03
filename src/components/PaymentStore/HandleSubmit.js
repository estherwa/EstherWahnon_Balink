import {createOrder} from "./Order";


export const handleSubmit = async (e) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        },2000)
        const formData = new FormData(e.currentTarget);
        e.preventDefault();
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        createOrder()
    })
};
//**********************************************************************************************************************
