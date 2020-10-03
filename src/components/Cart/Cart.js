import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((sum, course) => sum + Number(course.price), 0);
    return (
        <div className="cart">
            <h4>Order Review</h4>
            <p>Added Course : {cart.length}</p>
            <p>Total Price : ${totalPrice}</p>
        </div>
    );
};

export default Cart;