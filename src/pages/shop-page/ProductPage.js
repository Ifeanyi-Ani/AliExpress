import React from 'react';
import { IoChevronForwardOutline, IoChevronBackOutline, IoReorderThreeOutline, IoGridOutline, } from 'react-icons/io5';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
// import CardProd from '../../components/card-prod/CardProd';
import product1 from '../../images/product1.webp';
import { HomepageLink } from '../../components/homepage-link/HomepageLink';
import { CartpageLink } from '../../components/cartpage-link/CartpageLink';
import { IoSearch, } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './productpage.css';

const ProductPage = () => {
    const [toggle, setToggle] = useState(1);
    const handleState = (index) => {
        setToggle(index);
    }
    return (
        <div className='product-container'>
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
            <div className="inner">
                <div className="aside">
                    <div >
                        <h4>Categories</h4>
                        <ul>
                            <h5><IoChevronBackOutline /> All Categories</h5>
                            <span>Men's Clothing</span>
                            <li>Men's Sets</li>
                            <li>Pants</li>
                            <li>Tops & Tees</li>
                            <li>Board Shorts</li>
                            <li>Sweaters</li>
                            <li>Suits & Blazers</li>
                            <li>Shirts</li>
                            <li>Jackets & Coats</li>
                            <li>Jeans</li>
                            <li>Casual Shorts</li>
                            <li>Hoodies & Sweatshirts</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="align">
                            <h4>Size</h4>
                            <li><input type="checkbox" id='oneSize' /><label htmlFor="oneSize">One Size</label></li>
                            <li><input type="checkbox" id='xs' /><label htmlFor="xs">XS</label></li>
                            <li><input type="checkbox" id='xxs' /><label htmlFor="xxs">XXS</label></li>
                            <li><input type="checkbox" id='xl' /><label htmlFor="xl">XL</label></li>
                            <li><input type="checkbox" id='xxl' /><label htmlFor="xxl">XXL</label></li>
                            <span>View More</span>
                        </ul>

                    </div>
                    <div>
                        <ul className="align">
                            <h4>Material</h4>
                            <li><input type="checkbox" id='acrylic' /><label htmlFor="acrylic">Acrylic</label></li>
                            <li><input type="checkbox" id='faux' /><label htmlFor="faux">Faux Fur</label></li>
                            <li><input type="checkbox" id='cotton' /><label htmlFor="cotton">Cotton</label></li>
                            <li><input type="checkbox" id='fur' /><label htmlFor="fur">Fur</label></li>
                            <li><input type="checkbox" id='polyester' /><label htmlFor="polyester">Polyester</label></li>
                            <span>View More</span>
                        </ul>

                    </div>
                    <div>
                        <h5>AliExpress Mobile App</h5>
                        <span>Search Anywhere</span>
                    </div>
                </div>

                <div className="main">
                    <div className="inner">
                        <div className='top'>
                            <p><span className='link'>AliExpress</span> <IoChevronForwardOutline /> <span className="link">Men's Clothing</span> <IoChevronForwardOutline /> <span className='bold'>"Men's Sets"</span></p>
                            <div className="flex">
                                <div className="col">
                                    <span>Price:</span> <input type="number" name="" id="" placeholder='Min.' /> <span>-</span> <input type="number" name="" id="" placeholder='Max' />
                                    <div className="outer-box">
                                        <div className="inner-box">
                                            <div className="box bx1"></div>
                                        </div>
                                        <div className="inner-box">
                                            <div className="box bx2"></div>
                                        </div>
                                        <div className="inner-box">
                                            <div className="box bx3"></div>
                                        </div>
                                        <div className="inner-box">
                                            <div className="box bx4"></div>
                                        </div>
                                        <div className="inner-box">
                                            <div className="box bx5"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col space">
                                    <div >
                                        <input type="checkbox" name="" id="plus" />
                                        <label htmlFor='plus'>PLUS</label>
                                    </div >
                                    <div>
                                        <input type="checkbox" name="" id="rating" />
                                        <label htmlFor='rating'> <span className="rating"><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarFullOutline /><TiStarOutline /></span> & up</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-bt">
                                <div className="col space">
                                    <span>Sort by:</span>
                                    <div className='type'>
                                        <input type="text" name="" id="" value="Best Match" />
                                        <input type="text" name="" id="" value="Orders" />
                                        <input type="text" name="" id="" value="Price" />
                                    </div>
                                </div>
                                <div className="col space">
                                    <span>View:</span>
                                    <IoGridOutline
                                        role="button"
                                        className={`${toggle === 1 ? 'active' : ''}`}
                                        onClick={() => handleState(1)} />
                                    <IoReorderThreeOutline
                                        role="button"
                                        className={`${toggle === 2 ? 'active' : ''}`}
                                        onClick={() => handleState(2)} />
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className={`prod ${toggle === 1 ? 'prod-grid' : 'prod-flex'}`}>
                        <Link to="/product/2" className="prod-card">
                            <div className="img-con">
                                <img src={product1} alt="products" />
                            </div>
                            <div className="content">
                                <div className="wrapper">
                                    <div className="amt"><span>NGN</span>2,018</div>
                                    <div className="txt"><h5>Fashion T-shirt Men's Classic Color... Fashion T-shirt Men's Classic Color... Fashion T-shirt Men's Classic Color...</h5></div>
                                </div>
                                <span className='cl'>Free Shipping</span>

                                <div className='pos-bottom'>Store</div>
                            </div>
                        </Link>
                        <div className="prod-card">
                            <div className="img-con">
                                <img src={product1} alt="products" />
                            </div>
                            <div className="content">
                                <div className="wrapper">
                                    <div className="amt"><span>NGN</span>2,018</div>
                                    <div className="txt"><h5>Fashion T-shirt Men's Classic Color...</h5></div>
                                </div>
                                <span className='cl'>Free Shipping</span>

                                <div className='pos-bottom'>Store</div>
                            </div>
                        </div>
                        <div className="prod-card">
                            <div className="img-con">
                                <img src={product1} alt="products" />
                            </div>
                            <div className="content">
                                <div className="wrapper">
                                    <div className="amt"><span>NGN</span>2,018</div>
                                    <div className="txt"><h5>Fashion T-shirt Men's Classic Color...</h5></div>
                                </div>
                                <span className='cl'>Free Shipping</span>

                                <div className='pos-bottom'>Store</div>
                            </div>
                        </div>
                        <div className="prod-card">
                            <div className="img-con">
                                <img src={product1} alt="products" />
                            </div>
                            <div className="content">
                                <div className="wrapper">
                                    <div className="amt"><span>NGN</span>2,018</div>
                                    <div className="txt"><h5>Fashion T-shirt Men's Classic Color...</h5></div>
                                </div>
                                <span className='cl'>Free Shipping</span>

                                <div className='pos-bottom'>Store</div>
                            </div>
                        </div>
                        <div className="prod-card">
                            <div className="img-con">
                                <img src={product1} alt="products" />
                            </div>
                            <div className="content">
                                <div className="wrapper">
                                    <div className="amt"><span>NGN</span>2,018</div>
                                    <div className="txt"><h5>Fashion T-shirt Men's Classic Color...</h5></div>
                                </div>
                                <span className='cl'>Free Shipping</span>

                                <div className='pos-bottom'>Store</div>
                            </div>
                        </div>
                        <div className="prod-card">
                            <div className="img-con">
                                <img src={product1} alt="products" />
                            </div>
                            <div className="content">
                                <div className="wrapper">
                                    <div className="amt"><span>NGN</span>2,018</div>
                                    <div className="txt"><h5>Fashion T-shirt Men's Classic Color...</h5></div>
                                </div>
                                <span className='cl'>Free Shipping</span>

                                <div className='pos-bottom'>Store</div>
                            </div>
                        </div>
                    </div>
                    <div className="pignation">
                        <div className="buttons">
                            <button><IoChevronBackOutline /> Previous</button>
                            <button className='btn-active'>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button>4</button>
                            <button>5</button>
                            <button>6</button>
                            <button>7</button>
                            <button>Next <IoChevronForwardOutline /></button>
                        </div>
                        <div className="search">
                            <span>Go to Page</span>
                            <input type="number" />
                            <button>Go</button>
                        </div>
                    </div>

                    <div className="rank">
                        <h4>Ranking Keywords</h4>
                        <span>90s aesthetic</span>
                    </div>
                    <div className="rank">
                        <h4>1.7  <TiStarFullOutline /><TiStarFullOutline /><TiStarOutline /><TiStarOutline /><TiStarOutline /> Results for men's-clothing</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage