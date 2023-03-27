import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    // const {cart}=props;
    console.log(cart)
    let totalPrice = 0;
    let totalShipping = 0;
    
    for (const product of cart) {
        totalPrice = totalPrice + product.price;  
        totalShipping += product.shipping;

    }
    const totalTax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + totalTax;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Item:{cart.length}</p>
            <p>Total Price :<strong>${totalPrice}</strong></p>
            <p>Shipping :${totalShipping}</p>
            <p>Tax : ${totalTax.toFixed(2)}</p>
            <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;