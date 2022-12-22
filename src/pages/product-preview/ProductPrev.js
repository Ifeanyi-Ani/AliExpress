import React from 'react';
import product1 from '../../images/product1.webp';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import { QuantityBtn } from '../../components/quantity_cont/QuantityBtn';
import { HomepageLink } from '../../components/homepage-link/HomepageLink';
import { CartpageLink } from '../../components/cartpage-link/CartpageLink';
import { IoCaretDown } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './productprev.css';
const ProductPrev = () => {
    return (
        <div className='s-prod-wrapper'>
            <div className='header'>
                <div className="inner">
                    <div className="col">
                        <HomepageLink />
                        <ul>
                            <li>CT12 Factory Store <span><IoCaretDown /></span> <br /> 81.8% <span>Positive feedback</span> </li>
                            <li><button>+ Follow</button> <br />33 <span>Followers</span></li>
                        </ul>
                    </div>
                    <div className="col2">
                        <div className="search-wrapper">
                            <input type="text" name="" placeholder="I'm shopping for" id="" />
                            <button>On AliExpress</button>
                            <button>In this store</button>
                        </div>
                        <div className="col3">
                            <CartpageLink />
                        </div>
                    </div>

                </div>
            </div>


            <div className='sp-links'>
                <ul className="links">
                    <li>Store Home</li>
                    <li className='drop-down'>Products
                        <div className="mega-menu">
                            <ul>
                                <li>long sleeve T-shirt </li>
                                <li>T-shirt set </li>
                                <li>T-shirt </li>
                                <li>long sleeve set </li>
                                <li>hoodie </li>
                                <li>others </li>
                                <li>view all products </li>
                            </ul>
                        </div>
                    </li>
                    <li>Sale Items</li>
                    <li>Top Selling</li>
                    <li>Feedback</li>
                </ul>
            </div>
            <div className="p-details">
                <div className="img-view">
                    <div className="img-lg">
                        <img src={product1} alt="img" />
                    </div>
                    <div className="img-flex">
                        <div className="f-img"><img src={product1} alt="img" /></div>
                        <div className="f-img"><img src={product1} alt="img" /></div>
                        <div className="f-img"><img src={product1} alt="img" /></div>
                        <div className="f-img"><img src={product1} alt="img" /></div>
                        <div className="f-img"><img src={product1} alt="img" /></div>
                        <div className="f-img"><img src={product1} alt="img" /></div>
                    </div>
                </div>

                <div className="p-info">
                    <div className="title">
                        <h4>Fashion T-shirt Men's Classic Color Feather Printing Pattern Series All-match Casual O-neck Commuter Comfortable Top T-shirt</h4>
                        <div><span><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarOutline /></span> 3.9 62 Reviews 476 orders</div>
                    </div>
                    <div className="amt">
                        <h1>NGN 2,021 <span>NGN 2,962</span></h1>
                    </div>
                    <div className="details">
                        <h5>Color:2feather001</h5>
                        <div className="grid-con">
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                            <div className="col"><img src={product1} alt='img' /></div>
                        </div>

                        <h5>Size:S</h5>
                        <div className="flex">
                            <button>S</button>
                            <button className='active'>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXL</button>
                            <button>XXXL</button>
                            <button>4XL</button>
                            <button>5XL</button>
                            <div>Size info</div>
                        </div>

                        <h5>Sale by Pack:Pack of 1</h5>
                        <button className='active pack'>Pack of 1</button>

                        <h5>Quantity: <span>1</span></h5>
                        <div className="q-flex">
                            <QuantityBtn />
                            <div className="info">Aditional 5% off (3 piece or more) <br />775 pieces available</div>
                        </div>

                        <div className="ship">
                            <h6>Ship to <span>Nigeria</span></h6>
                            <h4>Free Shipping</h4>
                            <p>From China to Nigeria via Cainiao Super Economy Global <br />
                                Estimated delivery on Feb 20
                            </p>

                            <div className="btn-flex">
                                <button>Buy Now</button>
                                <button>Add to Cart</button>
                                <button>758</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="recommend">
                    <h5>Recommended For <br /> You</h5>
                    <div className="card">
                        <img src={product1} alt="img" />
                        <h4>NGN 3,000</h4>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductPrev
