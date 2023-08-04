import React from 'react';
import { IoChevronForwardOutline, IoChevronBackOutline, IoReorderThreeOutline, IoGridOutline, } from 'react-icons/io5';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
// import CardProd from '../../components/card-prod/CardProd';
import { useContext } from 'react';
import { ContextData } from '../../context/ContextData';
import { HomepageLink } from '../../components/homepage-link/HomepageLink';
import { CartpageLink } from '../../components/cartpage-link/CartpageLink';
import { IoSearch, } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './productpage.css';

const ProductPage = () => {
    const { product } = useContext(ContextData);
    const [toggle, setToggle] = useState(1);
    const handleState = (index) => {
        setToggle(index);
    }
    const productsPerPage = 4; // Number of products to show per page
    const totalPages = Math.ceil(product.length / productsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    // Function to get the products for the current page
    const getProductsForCurrentPage = () => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return [...product].reverse().slice(startIndex, endIndex);
    };

    // Function to handle pagination button clicks
    const handlePaginationClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // Function to handle "Previous" button click
    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    // Function to handle "Next" button click
    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };
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
                                        <input type="button" name="" id="" value="Best Match" />
                                        <input type="button" name="" id="" value="Orders" />
                                        <input type="button" name="" id="" value="Price" />
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

                        {product ? getProductsForCurrentPage().map((data, idx) => (
                            <Link to={`/product/${data._id}`} className="prod-card" key={idx}>
                                <div className="img-con">
                                    <img src={`http://159.65.21.42:9000${data.image}`} alt="products" />
                                </div>
                                <div className="content">
                                    <div className="wrapper">
                                        <div className="amt"><span>NGN</span>{data.price}</div>
                                        <div className="txt"><h5>{data.description}</h5></div>
                                    </div>
                                    <span className='cl'>Free Shipping</span>

                                    <div className='pos-bottom'>Store</div>
                                </div>
                            </Link>
                        )) : (<div>Loading Product Data</div>)}
                    </div>
                    <div className="pignation">
                        <div className="buttons">
                            <button onClick={handlePreviousClick}>
                                <IoChevronBackOutline /> Previous
                            </button>
                            {/* Display pagination buttons */}
                            {[...Array(totalPages).keys()].map((pageNumber) => (
                                <button
                                    key={pageNumber}
                                    className={currentPage === pageNumber + 1 ? 'btn-active' : ''}
                                    onClick={() => handlePaginationClick(pageNumber + 1)}
                                >
                                    {pageNumber + 1}
                                </button>
                            ))}
                            <button onClick={handleNextClick}>
                                Next <IoChevronForwardOutline />
                            </button>
                        </div>
                        {/* <div className="search">
                            <span>Go to Page</span>
                            <input type="number" />
                            <button>Go</button>
                        </div> */}
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