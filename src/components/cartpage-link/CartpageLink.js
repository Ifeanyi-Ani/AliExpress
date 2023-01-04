import React from 'react';
import { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { ContextData } from '../../context/ContextData';
import "./cartpagelink.css";

export const CartpageLink = () => {
    const { cart } = useContext(ContextData);
    return (
        <div className="cart-count">
            <Link to="/shoppingcart" data-cart={cart.length}><IoCartOutline /></Link>
        </div>
    )
}
