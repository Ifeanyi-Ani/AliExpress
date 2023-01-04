import React from 'react';
import product1 from '../../images/product1.webp';
import { IoHeartOutline, IoTrashOutline } from 'react-icons/io5';
import { QuantityBtn } from '../../components/quantity_cont/QuantityBtn';
import { HiOutlineShieldCheck } from 'react-icons/hi2';
import pay1 from '../../images/pay_visa.png';
import pay2 from '../../images/pay_master.png';
import pay3 from '../../images/pay3.png';
import pay4 from '../../images/pay4.png';
import { HomepageLink } from '../../components/homepage-link/HomepageLink';
import { CartpageLink } from '../../components/cartpage-link/CartpageLink';
import { IoSearch, } from 'react-icons/io5';

import './cartview.css';
import { useContext } from 'react';
import { ContextData } from '../../context/ContextData';
import { useState } from 'react';
import Modal from '../../components/modal/Modal';

const CartView = () => {
    const { cart, increaseCartQty, decreaseCartQty, deleteCartItem, GrandTotalPrice } = useContext(ContextData);
    const [openModal, setopenModal] = useState(false);
    const handleDeleteCart = (item) => {
        deleteCartItem(item);
        setopenModal(false)
    }
    return (
        <div className='cart'>
            <div className='header'>
                <div className="inner">
                    <div className="col">
                        <HomepageLink />
                    </div>
                    <div className="col2">
                        <div className="search-wrapper">
                            <input type="text" name="" placeholder='iphone 11 pro max case' id="" />
                            <button><IoSearch /></button>
                        </div>
                    </div>
                    <div className="col3">
                        <CartpageLink />
                    </div>
                </div>
            </div>
            <div className="shopping-cart">
                <div className="col1">
                    <div className='section' >
                        <h2>Shopping Cart ({cart.length})</h2>
                        <div className="flex">
                            <div className="col">
                                <input type="checkbox" name="" id="items" />
                                <label htmlFor="items">Select all items</label>
                            </div>
                            <div className="col">
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>


                    {cart.map((data, index) => (
                        <div className="cardbox section" key={index}>
                            <div className="flex bord">
                                <div className="col"><input type="checkbox" name="" id="item1" />
                                    <label htmlFor="item1">{data.name}</label>
                                </div>
                                <div className="col">
                                    <button>Get discount</button>
                                </div>
                            </div>
                            <div className="card-wrap">
                                <div className="col1">
                                    <input type="checkbox" name="" id="" />
                                    <div className='img-con'><img src={`http://159.65.21.42:9000${data.image}`} alt="img" /></div>
                                </div>
                                <div className="card">
                                    <div className="flex">
                                        <div className="col">
                                            <h5>{data.description}</h5>
                                        </div>
                                        <div className="col btn-cl">
                                            <span><IoHeartOutline /></span>
                                            <button onClick={() => setopenModal(true)}><IoTrashOutline /></button>
                                        </div>
                                        <Modal
                                            open={openModal}
                                            close={() => setopenModal(false)}
                                            className="open-modal"
                                        >
                                            <div className='cart-msg xenter'>
                                                <h4>Remove Product</h4>
                                                <span>Remove item form cart</span>
                                                <div className="ctrbtn">
                                                    <button onClick={() => handleDeleteCart(data)}>Remove</button>
                                                    <button onClick={() => setopenModal(false)}>Cancel</button>
                                                </div>

                                            </div>
                                        </Modal>
                                    </div>
                                    <div className="flex space-up">
                                        <div className="col">
                                            <h4>NGN {data.price}</h4>
                                            <span>+ Shipping fee US $2.62</span>
                                        </div>
                                        <div className="col">
                                            <QuantityBtn count={data.order_quantity}
                                                increase={() => increaseCartQty(data)}
                                                decrease={() => decreaseCartQty(data)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="col2">
                    <div className="summary-list">
                        <h2>Summary</h2>
                        <div className="flex">
                            <div className="col">Subtotal</div>
                            <div className="col">NGN {GrandTotalPrice}</div>
                        </div>
                        <div className="flex">
                            <div className="col">Shipping fee</div>
                            <div className="col">Us $34</div>
                        </div>
                        <div className="flex total">
                            <div className="col">Total</div>
                            <div className="col">NGN {GrandTotalPrice}</div>
                        </div>
                        <div>
                            <button>Checkout ({cart.length})</button>
                        </div>
                    </div>

                    <div className="payment">
                        <div className="top">
                            <h3>Payment methods</h3>
                            <img src={pay1} alt="img" />
                            <img src={pay2} alt="img" />
                            <img src={pay3} alt="img" />
                            <img src={pay4} alt="img" />
                        </div>
                        <div>
                            <h3>Buyer Protection</h3>
                            <span><HiOutlineShieldCheck /> Get full refund if the item is not as described or if is not delivered</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartView
