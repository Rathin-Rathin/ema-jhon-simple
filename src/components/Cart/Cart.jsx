import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    // const {cart}=props;
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        totalPrice = totalPrice + product.price*product.quantity;  
        totalShipping += product.shipping;
        quantity += product.quantity;
    }
    const totalTax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + totalTax;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Item:{quantity}</p>
            <p>Total Price :<strong>${totalPrice}</strong></p>
            <p>Shipping :${totalShipping}</p>
            <p>Tax : ${totalTax.toFixed(2)}</p>
            <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;