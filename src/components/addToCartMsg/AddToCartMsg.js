import React from 'react'
import { useContext } from 'react'
import { ContextData } from '../../context/ContextData'
import { useNavigate } from 'react-router-dom'
import './addtocartmsg.css'


const AddToCartMsg = ({ handleClose }) => {
    const { cart } = useContext(ContextData);
    let history = useNavigate()
    const handleClick = () => {
        history('/shoppingcart');
    }
    return (
        <div className='cart-msg'>
            <span>
                A new item has been added to your Shopping Cart. You now have {cart.length} items in your Shopping Cart.
            </span>
            <div className="ctrbtn">
                <button onClick={handleClick}>view shopping cart</button>
                <button onClick={handleClose}>continue shopping</button>
            </div>
        </div>
    )
}

export default AddToCartMsg
