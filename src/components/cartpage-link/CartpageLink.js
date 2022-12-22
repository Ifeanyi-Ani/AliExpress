import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import "./cartpagelink.css";

export const CartpageLink = () => {
    return (
        <div className="cart-count">
            <Link to="/shoppingcart" data-cart="0"><IoCartOutline /></Link>
        </div>
    )
}
