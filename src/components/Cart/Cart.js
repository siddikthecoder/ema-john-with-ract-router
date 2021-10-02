import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);

    // const cartReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(cartReducer, 0);

    let total = 0;
    let totalQuantity = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shippingCharge = total > 0 ? 15 : 0;
    
    const tax = (total + shippingCharge)*10/100;
    const grandTotal = total + shippingCharge + tax;

    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <h3>Items Ordered:<span> {totalQuantity}</span></h3>
            <br />
            <p>Total:<span> {total.toFixed(2)}</span></p>
            <p>Shipping:<span> {shippingCharge}</span></p>
            <p>Tax:<span> {tax.toFixed(2)}</span></p>
            <p>Grand Total:<span> {grandTotal.toFixed(2)}</span></p>
            <p><button className="btn-cart-preview">Cart Preview</button></p>
        </div>
    );
};

export default Cart;