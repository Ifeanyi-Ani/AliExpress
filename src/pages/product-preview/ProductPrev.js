import React from 'react';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import { QuantityBtn } from '../../components/quantity_cont/QuantityBtn';
import { HomepageLink } from '../../components/homepage-link/HomepageLink';
import { CartpageLink } from '../../components/cartpage-link/CartpageLink';
import { IoCaretDown } from 'react-icons/io5';
import { useContext } from 'react';
import { ContextData } from '../../context/ContextData';
import { Link, useParams } from 'react-router-dom';
import Modal from '../../components/modal/Modal'
import { useState } from 'react';
import { useEffect } from 'react';
import AddToCartMsg from '../../components/addToCartMsg/AddToCartMsg';
import './productprev.css';
const ProductPrev = () => {
    const { addToCart, product, setopenModal, openModal } = useContext(ContextData);
    // const [openModal, setopenModal] = useState(false)
    const [singlePrd, setSinglePrd] = useState({})
    const { id } = useParams();
    const getSingleProduct = async () => {
        try {
            const fetchPost = await fetch(`http://159.65.21.42:9000/product/${id}`)
            const data = await fetchPost.json();
            setSinglePrd(data)
        } catch (err) {
            console.log(err);
        }
    }
    const handleAddCart = (data) => {
        addToCart(data)
        setopenModal(true);
    }
    useEffect(() => {
        getSingleProduct()
    }, [])
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
                        <img src={`http://159.65.21.42:9000${singlePrd.image}`} alt="img" />
                    </div>
                    <div className="img-flex">
                        <div className="f-img"><img src={`http://159.65.21.42:9000${singlePrd.image}`} alt="img" /></div>
                        <div className="f-img"><img src={`http://159.65.21.42:9000${singlePrd.image}`} alt="img" /></div>
                        <div className="f-img"><img src={`http://159.65.21.42:9000${singlePrd.image}`} alt="img" /></div>
                        <div className="f-img"><img src={`http://159.65.21.42:9000${singlePrd.image}`} alt="img" /></div>
                        <div className="f-img"><img src={`http://159.65.21.42:9000${singlePrd.image}`} alt="img" /></div>
                        <div className="f-img"><img src={`http://159.65.21.42:9000${singlePrd.image}`} alt="img" /></div>
                    </div>
                </div>

                <div className="p-info">
                    <div className="title">
                        <h4>{singlePrd.description}</h4>
                        <div><span><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarOutline /></span> 3.9 62 Reviews 476 orders</div>
                    </div>
                    <div className="amt">
                        <h1>NGN {singlePrd.price} <span>NGN {Math.floor(parseInt(singlePrd.price) * 100 / 30)}</span></h1>
                    </div>
                    <div className="details">
                        <h5>Color:2feather001</h5>
                        <div className="grid-con">
                            {Array.from(Array(21)).map((data, idx) => (
                                <div className="col" key={idx}><img src={`http://159.65.21.42:9000${singlePrd.image}`} alt='img' /></div>
                            ))}
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
                                <button onClick={() => handleAddCart(singlePrd)}>Add to Cart</button>
                                <button>758</button>
                            </div>
                            <Modal
                                open={openModal}
                                close={() => setopenModal(false)}

                            >
                                <AddToCartMsg handleClose={() => setopenModal(false)} />
                            </Modal>
                        </div>
                    </div>
                </div>


                <div className="recommend">
                    <h5>Recommended For <br /> You</h5>
                    {product.filter(data => data.name === singlePrd.name).slice(0, 3).map(data => (

                        <div className="card">
                            <img src={`http://159.65.21.42:9000${data.image}`} alt="img" />
                            <h4>NGN {data.price}</h4>
                        </div>

                    ))}
                </div>
            </div>


        </div>
    )
}

export default ProductPrev
