import React from "react";
import { VscListUnordered } from "react-icons/vsc"
import { TiStarFullOutline } from "react-icons/ti"
import { GoRadioTower, GoJersey, GoGithubAction, GoDeviceCamera } from "react-icons/go"
import { FaVenus, FaShoppingBag, FaFly, FaCottonBureau, FaDraft2Digital } from "react-icons/fa"
import { IoLaptopOutline, IoPhonePortraitOutline } from "react-icons/io5"
import { IoIosWoman, IoIosBaseball } from "react-icons/io";
import { SlideData } from "../../components/slider/SlideData";
import Slider from "../../components/slider/Slider";
import acc from "../../images/accc.webp"
import { RegSignin } from "../../components/reg_signin/Reg_Signin";
import miniCarousel1 from "../../images/miniCarousel1.webp";
import miniCarousel2 from "../../images/miniCarousel2.webp";
import superD from '../../images/superD.webp'
import { Banner } from "../../components/banner/Banner";
import { SubFooter } from "../../components/subFooter/SubFooter";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { IoReaderOutline, IoChatboxEllipsesOutline } from 'react-icons/io5'

import BreakSection from "../../components/sign-with/BreakSection";
import { useContext } from "react";
import { ContextData } from "../../context/ContextData";

import "./home.css";
function Homepage() {
    const { isLoggedin, loggedUser, product } = useContext(ContextData);

    let bgcl1 = "linear-gradient(to right, #ff0e0b, #ff7137)", cl1 = "#fff", rd = "20px", bgcl2 = "#f5f5f5", cl2 = "#333"
    return (
        <div className="home-container">
            <Header />
            <div className="grid-container">

                <div className="side-nav">
                    <div className="flex"><VscListUnordered /> Categories</div>
                    <ul className="cate-items">
                        <li className="dropDown"><div className="flex"><IoIosWoman /> Women's Fashion</div>
                            <div className="mega-menu">
                                <div>
                                    <ul>
                                        <h4>Women's Fashion</h4>
                                        <li>Dress</li>
                                        <li>Tees</li>
                                        <li>Blouses & Shirts</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Women's Sets</li>
                                        <li>Suits & Blazers</li>
                                        <li>Bodysuits</li>
                                        <li>Tanks & Camis</li>
                                        <li>Coats & Jackets</li>
                                        <li>Sweaters</li>
                                    </ul>
                                    <ul>
                                        <h4>Swimwear</h4>
                                        <li>Bikini Sets</li>
                                        <li>Cover-ups</li>
                                    </ul>
                                    <ul>
                                        <h4>Muslim Fashion</h4>
                                        <li>Abaya</li>
                                        <li>Women's Hijabs</li>
                                        <li>Muslim Sets</li>
                                        <li>Prayer Hats</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>bottoms</h4>
                                        <li>Leggings</li>
                                        <li>Skirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Pants & Capris</li>
                                    </ul>
                                    <ul>
                                        <h4>Plus Size Cloths</h4>
                                        <li>Plus Size Dresses</li>
                                        <li>Plus Size T-Shirts</li>
                                        <li>Plus Size Sets</li>
                                        <li>Plus Size Pants & Capris</li>
                                        <li>Plus Size Outwear</li>
                                        <li>Plus Size Blouses & Shirts</li>
                                    </ul>
                                    <ul>
                                        <h4>Wedding & Events</h4>
                                        <li>Wedding Dresses</li>
                                        <li>Prom Dresses</li>
                                        <li>Evening Dresses</li>
                                        <li>Africa Clothing</li>
                                        <li>Cosplay Costumes</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>Women's Underwear</h4>
                                        <li>Pajama Sets</li>
                                        <li>Bras</li>
                                        <li>Panties</li>
                                        <li>Women's Socks</li>
                                        <li>Bra & Brief Sets</li>
                                        <li>Shapwear</li>
                                    </ul>
                                    <ul>
                                        <h4>Accessories</h4>
                                        <li>Hair Accessories</li>
                                        <li>Sunglasses</li>
                                        <li>Blue Light Blocking Glasses</li>
                                        <li>Baseball Caps</li>
                                        <li>Bucket Hats</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div>
                                    images
                                </div>
                            </div>
                        </li>
                        <li className="dropDown"><div className="flex"><GoJersey /> <Link to="/products">Men's Fashion</Link></div>
                            <div className="mega-menu">
                                <div>
                                    <ul>
                                        <h4>Women's Fashion</h4>
                                        <li>Dress</li>
                                        <li>Tees</li>
                                        <li>Blouses & Shirts</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Women's Sets</li>
                                        <li>Suits & Blazers</li>
                                        <li>Bodysuits</li>
                                        <li>Tanks & Camis</li>
                                        <li>Coats & Jackets</li>
                                        <li>Sweaters</li>
                                    </ul>
                                    <ul>
                                        <h4>Swimwear</h4>
                                        <li>Bikini Sets</li>
                                        <li>Cover-ups</li>
                                    </ul>
                                    <ul>
                                        <h4>Muslim Fashion</h4>
                                        <li>Abaya</li>
                                        <li>Women's Hijabs</li>
                                        <li>Muslim Sets</li>
                                        <li>Prayer Hats</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>bottoms</h4>
                                        <li>Leggings</li>
                                        <li>Skirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Pants & Capris</li>
                                    </ul>
                                    <ul>
                                        <h4>Plus Size Cloths</h4>
                                        <li>Plus Size Dresses</li>
                                        <li>Plus Size T-Shirts</li>
                                        <li>Plus Size Sets</li>
                                        <li>Plus Size Pants & Capris</li>
                                        <li>Plus Size Outwear</li>
                                        <li>Plus Size Blouses & Shirts</li>
                                    </ul>
                                    <ul>
                                        <h4>Wedding & Events</h4>
                                        <li>Wedding Dresses</li>
                                        <li>Prom Dresses</li>
                                        <li>Evening Dresses</li>
                                        <li>Africa Clothing</li>
                                        <li>Cosplay Costumes</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>Women's Underwear</h4>
                                        <li>Pajama Sets</li>
                                        <li>Bras</li>
                                        <li>Panties</li>
                                        <li>Women's Socks</li>
                                        <li>Bra & Brief Sets</li>
                                        <li>Shapwear</li>
                                    </ul>
                                    <ul>
                                        <h4>Accessories</h4>
                                        <li>Hair Accessories</li>
                                        <li>Sunglasses</li>
                                        <li>Blue Light Blocking Glasses</li>
                                        <li>Baseball Caps</li>
                                        <li>Bucket Hats</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div>
                                    images
                                </div>
                            </div>
                        </li>
                        <li className="dropDown"><div className="flex"><IoPhonePortraitOutline /> Phones & Telecommunications</div>
                            <div className="mega-menu">
                                <div>
                                    <ul>
                                        <h4>Women's Fashion</h4>
                                        <li>Dress</li>
                                        <li>Tees</li>
                                        <li>Blouses & Shirts</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Women's Sets</li>
                                        <li>Suits & Blazers</li>
                                        <li>Bodysuits</li>
                                        <li>Tanks & Camis</li>
                                        <li>Coats & Jackets</li>
                                        <li>Sweaters</li>
                                    </ul>
                                    <ul>
                                        <h4>Swimwear</h4>
                                        <li>Bikini Sets</li>
                                        <li>Cover-ups</li>
                                    </ul>
                                    <ul>
                                        <h4>Muslim Fashion</h4>
                                        <li>Abaya</li>
                                        <li>Women's Hijabs</li>
                                        <li>Muslim Sets</li>
                                        <li>Prayer Hats</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>bottoms</h4>
                                        <li>Leggings</li>
                                        <li>Skirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Pants & Capris</li>
                                    </ul>
                                    <ul>
                                        <h4>Plus Size Cloths</h4>
                                        <li>Plus Size Dresses</li>
                                        <li>Plus Size T-Shirts</li>
                                        <li>Plus Size Sets</li>
                                        <li>Plus Size Pants & Capris</li>
                                        <li>Plus Size Outwear</li>
                                        <li>Plus Size Blouses & Shirts</li>
                                    </ul>
                                    <ul>
                                        <h4>Wedding & Events</h4>
                                        <li>Wedding Dresses</li>
                                        <li>Prom Dresses</li>
                                        <li>Evening Dresses</li>
                                        <li>Africa Clothing</li>
                                        <li>Cosplay Costumes</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>Women's Underwear</h4>
                                        <li>Pajama Sets</li>
                                        <li>Bras</li>
                                        <li>Panties</li>
                                        <li>Women's Socks</li>
                                        <li>Bra & Brief Sets</li>
                                        <li>Shapwear</li>
                                    </ul>
                                    <ul>
                                        <h4>Accessories</h4>
                                        <li>Hair Accessories</li>
                                        <li>Sunglasses</li>
                                        <li>Blue Light Blocking Glasses</li>
                                        <li>Baseball Caps</li>
                                        <li>Bucket Hats</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div>
                                    images
                                </div>
                            </div>
                        </li>
                        <li className="dropDown"><div className="flex"><IoLaptopOutline /> Computer Office & security</div>
                            <div className="mega-menu">
                                <div>
                                    <ul>
                                        <h4>Women's Fashion</h4>
                                        <li>Dress</li>
                                        <li>Tees</li>
                                        <li>Blouses & Shirts</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Women's Sets</li>
                                        <li>Suits & Blazers</li>
                                        <li>Bodysuits</li>
                                        <li>Tanks & Camis</li>
                                        <li>Coats & Jackets</li>
                                        <li>Sweaters</li>
                                    </ul>
                                    <ul>
                                        <h4>Swimwear</h4>
                                        <li>Bikini Sets</li>
                                        <li>Cover-ups</li>
                                    </ul>
                                    <ul>
                                        <h4>Muslim Fashion</h4>
                                        <li>Abaya</li>
                                        <li>Women's Hijabs</li>
                                        <li>Muslim Sets</li>
                                        <li>Prayer Hats</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>bottoms</h4>
                                        <li>Leggings</li>
                                        <li>Skirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Pants & Capris</li>
                                    </ul>
                                    <ul>
                                        <h4>Plus Size Cloths</h4>
                                        <li>Plus Size Dresses</li>
                                        <li>Plus Size T-Shirts</li>
                                        <li>Plus Size Sets</li>
                                        <li>Plus Size Pants & Capris</li>
                                        <li>Plus Size Outwear</li>
                                        <li>Plus Size Blouses & Shirts</li>
                                    </ul>
                                    <ul>
                                        <h4>Wedding & Events</h4>
                                        <li>Wedding Dresses</li>
                                        <li>Prom Dresses</li>
                                        <li>Evening Dresses</li>
                                        <li>Africa Clothing</li>
                                        <li>Cosplay Costumes</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>Women's Underwear</h4>
                                        <li>Pajama Sets</li>
                                        <li>Bras</li>
                                        <li>Panties</li>
                                        <li>Women's Socks</li>
                                        <li>Bra & Brief Sets</li>
                                        <li>Shapwear</li>
                                    </ul>
                                    <ul>
                                        <h4>Accessories</h4>
                                        <li>Hair Accessories</li>
                                        <li>Sunglasses</li>
                                        <li>Blue Light Blocking Glasses</li>
                                        <li>Baseball Caps</li>
                                        <li>Bucket Hats</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div>
                                    images
                                </div>
                            </div>
                        </li>
                        <li className="dropDown"><div className="flex"><GoDeviceCamera /> Consumers Electronics</div>
                            <div className="mega-menu">
                                <div>
                                    <ul>
                                        <h4>Women's Fashion</h4>
                                        <li>Dress</li>
                                        <li>Tees</li>
                                        <li>Blouses & Shirts</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Women's Sets</li>
                                        <li>Suits & Blazers</li>
                                        <li>Bodysuits</li>
                                        <li>Tanks & Camis</li>
                                        <li>Coats & Jackets</li>
                                        <li>Sweaters</li>
                                    </ul>
                                    <ul>
                                        <h4>Swimwear</h4>
                                        <li>Bikini Sets</li>
                                        <li>Cover-ups</li>
                                    </ul>
                                    <ul>
                                        <h4>Muslim Fashion</h4>
                                        <li>Abaya</li>
                                        <li>Women's Hijabs</li>
                                        <li>Muslim Sets</li>
                                        <li>Prayer Hats</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>bottoms</h4>
                                        <li>Leggings</li>
                                        <li>Skirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Pants & Capris</li>
                                    </ul>
                                    <ul>
                                        <h4>Plus Size Cloths</h4>
                                        <li>Plus Size Dresses</li>
                                        <li>Plus Size T-Shirts</li>
                                        <li>Plus Size Sets</li>
                                        <li>Plus Size Pants & Capris</li>
                                        <li>Plus Size Outwear</li>
                                        <li>Plus Size Blouses & Shirts</li>
                                    </ul>
                                    <ul>
                                        <h4>Wedding & Events</h4>
                                        <li>Wedding Dresses</li>
                                        <li>Prom Dresses</li>
                                        <li>Evening Dresses</li>
                                        <li>Africa Clothing</li>
                                        <li>Cosplay Costumes</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>Women's Underwear</h4>
                                        <li>Pajama Sets</li>
                                        <li>Bras</li>
                                        <li>Panties</li>
                                        <li>Women's Socks</li>
                                        <li>Bra & Brief Sets</li>
                                        <li>Shapwear</li>
                                    </ul>
                                    <ul>
                                        <h4>Accessories</h4>
                                        <li>Hair Accessories</li>
                                        <li>Sunglasses</li>
                                        <li>Blue Light Blocking Glasses</li>
                                        <li>Baseball Caps</li>
                                        <li>Bucket Hats</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div>
                                    images
                                </div>
                            </div>
                        </li>
                        <li className="dropDown"><div className="flex"><FaFly /> Jewelry & Watches</div>
                            <div className="mega-menu">
                                <div>
                                    <ul>
                                        <h4>Women's Fashion</h4>
                                        <li>Dress</li>
                                        <li>Tees</li>
                                        <li>Blouses & Shirts</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Women's Sets</li>
                                        <li>Suits & Blazers</li>
                                        <li>Bodysuits</li>
                                        <li>Tanks & Camis</li>
                                        <li>Coats & Jackets</li>
                                        <li>Sweaters</li>
                                    </ul>
                                    <ul>
                                        <h4>Swimwear</h4>
                                        <li>Bikini Sets</li>
                                        <li>Cover-ups</li>
                                    </ul>
                                    <ul>
                                        <h4>Muslim Fashion</h4>
                                        <li>Abaya</li>
                                        <li>Women's Hijabs</li>
                                        <li>Muslim Sets</li>
                                        <li>Prayer Hats</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>bottoms</h4>
                                        <li>Leggings</li>
                                        <li>Skirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Pants & Capris</li>
                                    </ul>
                                    <ul>
                                        <h4>Plus Size Cloths</h4>
                                        <li>Plus Size Dresses</li>
                                        <li>Plus Size T-Shirts</li>
                                        <li>Plus Size Sets</li>
                                        <li>Plus Size Pants & Capris</li>
                                        <li>Plus Size Outwear</li>
                                        <li>Plus Size Blouses & Shirts</li>
                                    </ul>
                                    <ul>
                                        <h4>Wedding & Events</h4>
                                        <li>Wedding Dresses</li>
                                        <li>Prom Dresses</li>
                                        <li>Evening Dresses</li>
                                        <li>Africa Clothing</li>
                                        <li>Cosplay Costumes</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>Women's Underwear</h4>
                                        <li>Pajama Sets</li>
                                        <li>Bras</li>
                                        <li>Panties</li>
                                        <li>Women's Socks</li>
                                        <li>Bra & Brief Sets</li>
                                        <li>Shapwear</li>
                                    </ul>
                                    <ul>
                                        <h4>Accessories</h4>
                                        <li>Hair Accessories</li>
                                        <li>Sunglasses</li>
                                        <li>Blue Light Blocking Glasses</li>
                                        <li>Baseball Caps</li>
                                        <li>Bucket Hats</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div>
                                    images
                                </div>
                            </div>
                        </li>
                        <li className="dropDown"><div className="flex"><GoGithubAction /> Home Pets & Appliances</div>
                            <div className="mega-menu">
                                <div>
                                    <ul>
                                        <h4>Women's Fashion</h4>
                                        <li>Dress</li>
                                        <li>Tees</li>
                                        <li>Blouses & Shirts</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Women's Sets</li>
                                        <li>Suits & Blazers</li>
                                        <li>Bodysuits</li>
                                        <li>Tanks & Camis</li>
                                        <li>Coats & Jackets</li>
                                        <li>Sweaters</li>
                                    </ul>
                                    <ul>
                                        <h4>Swimwear</h4>
                                        <li>Bikini Sets</li>
                                        <li>Cover-ups</li>
                                    </ul>
                                    <ul>
                                        <h4>Muslim Fashion</h4>
                                        <li>Abaya</li>
                                        <li>Women's Hijabs</li>
                                        <li>Muslim Sets</li>
                                        <li>Prayer Hats</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>bottoms</h4>
                                        <li>Leggings</li>
                                        <li>Skirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Pants & Capris</li>
                                    </ul>
                                    <ul>
                                        <h4>Plus Size Cloths</h4>
                                        <li>Plus Size Dresses</li>
                                        <li>Plus Size T-Shirts</li>
                                        <li>Plus Size Sets</li>
                                        <li>Plus Size Pants & Capris</li>
                                        <li>Plus Size Outwear</li>
                                        <li>Plus Size Blouses & Shirts</li>
                                    </ul>
                                    <ul>
                                        <h4>Wedding & Events</h4>
                                        <li>Wedding Dresses</li>
                                        <li>Prom Dresses</li>
                                        <li>Evening Dresses</li>
                                        <li>Africa Clothing</li>
                                        <li>Cosplay Costumes</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>Women's Underwear</h4>
                                        <li>Pajama Sets</li>
                                        <li>Bras</li>
                                        <li>Panties</li>
                                        <li>Women's Socks</li>
                                        <li>Bra & Brief Sets</li>
                                        <li>Shapwear</li>
                                    </ul>
                                    <ul>
                                        <h4>Accessories</h4>
                                        <li>Hair Accessories</li>
                                        <li>Sunglasses</li>
                                        <li>Blue Light Blocking Glasses</li>
                                        <li>Baseball Caps</li>
                                        <li>Bucket Hats</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div>
                                    images
                                </div>
                            </div>
                        </li>
                        <li className="dropDown"><div className="flex"><FaShoppingBag /> Bags & Shoes</div>
                            <div className="mega-menu">
                                <div>
                                    <ul>
                                        <h4>Women's Fashion</h4>
                                        <li>Dress</li>
                                        <li>Tees</li>
                                        <li>Blouses & Shirts</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Women's Sets</li>
                                        <li>Suits & Blazers</li>
                                        <li>Bodysuits</li>
                                        <li>Tanks & Camis</li>
                                        <li>Coats & Jackets</li>
                                        <li>Sweaters</li>
                                    </ul>
                                    <ul>
                                        <h4>Swimwear</h4>
                                        <li>Bikini Sets</li>
                                        <li>Cover-ups</li>
                                    </ul>
                                    <ul>
                                        <h4>Muslim Fashion</h4>
                                        <li>Abaya</li>
                                        <li>Women's Hijabs</li>
                                        <li>Muslim Sets</li>
                                        <li>Prayer Hats</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>bottoms</h4>
                                        <li>Leggings</li>
                                        <li>Skirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Pants & Capris</li>
                                    </ul>
                                    <ul>
                                        <h4>Plus Size Cloths</h4>
                                        <li>Plus Size Dresses</li>
                                        <li>Plus Size T-Shirts</li>
                                        <li>Plus Size Sets</li>
                                        <li>Plus Size Pants & Capris</li>
                                        <li>Plus Size Outwear</li>
                                        <li>Plus Size Blouses & Shirts</li>
                                    </ul>
                                    <ul>
                                        <h4>Wedding & Events</h4>
                                        <li>Wedding Dresses</li>
                                        <li>Prom Dresses</li>
                                        <li>Evening Dresses</li>
                                        <li>Africa Clothing</li>
                                        <li>Cosplay Costumes</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>Women's Underwear</h4>
                                        <li>Pajama Sets</li>
                                        <li>Bras</li>
                                        <li>Panties</li>
                                        <li>Women's Socks</li>
                                        <li>Bra & Brief Sets</li>
                                        <li>Shapwear</li>
                                    </ul>
                                    <ul>
                                        <h4>Accessories</h4>
                                        <li>Hair Accessories</li>
                                        <li>Sunglasses</li>
                                        <li>Blue Light Blocking Glasses</li>
                                        <li>Baseball Caps</li>
                                        <li>Bucket Hats</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div>
                                    images
                                </div>
                            </div>
                        </li>
                        <li className="dropDown"><div className="flex"><GoRadioTower /> Toys Kids & Babies</div>
                            <div className="mega-menu">
                                <div>
                                    <ul>
                                        <h4>Women's Fashion</h4>
                                        <li>Dress</li>
                                        <li>Tees</li>
                                        <li>Blouses & Shirts</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Women's Sets</li>
                                        <li>Suits & Blazers</li>
                                        <li>Bodysuits</li>
                                        <li>Tanks & Camis</li>
                                        <li>Coats & Jackets</li>
                                        <li>Sweaters</li>
                                    </ul>
                                    <ul>
                                        <h4>Swimwear</h4>
                                        <li>Bikini Sets</li>
                                        <li>Cover-ups</li>
                                    </ul>
                                    <ul>
                                        <h4>Muslim Fashion</h4>
                                        <li>Abaya</li>
                                        <li>Women's Hijabs</li>
                                        <li>Muslim Sets</li>
                                        <li>Prayer Hats</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>bottoms</h4>
                                        <li>Leggings</li>
                                        <li>Skirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Pants & Capris</li>
                                    </ul>
                                    <ul>
                                        <h4>Plus Size Cloths</h4>
                                        <li>Plus Size Dresses</li>
                                        <li>Plus Size T-Shirts</li>
                                        <li>Plus Size Sets</li>
                                        <li>Plus Size Pants & Capris</li>
                                        <li>Plus Size Outwear</li>
                                        <li>Plus Size Blouses & Shirts</li>
                                    </ul>
                                    <ul>
                                        <h4>Wedding & Events</h4>
                                        <li>Wedding Dresses</li>
                                        <li>Prom Dresses</li>
                                        <li>Evening Dresses</li>
                                        <li>Africa Clothing</li>
                                        <li>Cosplay Costumes</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>Women's Underwear</h4>
                                        <li>Pajama Sets</li>
                                        <li>Bras</li>
                                        <li>Panties</li>
                                        <li>Women's Socks</li>
                                        <li>Bra & Brief Sets</li>
                                        <li>Shapwear</li>
                                    </ul>
                                    <ul>
                                        <h4>Accessories</h4>
                                        <li>Hair Accessories</li>
                                        <li>Sunglasses</li>
                                        <li>Blue Light Blocking Glasses</li>
                                        <li>Baseball Caps</li>
                                        <li>Bucket Hats</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div>
                                    images
                                </div>
                            </div>
                        </li>
                        <li className="dropDown"><div className="flex"><IoIosBaseball /> Outdoor Fun & Sports</div>
                            <div className="mega-menu">
                                <div>
                                    <ul>
                                        <h4>Women's Fashion</h4>
                                        <li>Dress</li>
                                        <li>Tees</li>
                                        <li>Blouses & Shirts</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Women's Sets</li>
                                        <li>Suits & Blazers</li>
                                        <li>Bodysuits</li>
                                        <li>Tanks & Camis</li>
                                        <li>Coats & Jackets</li>
                                        <li>Sweaters</li>
                                    </ul>
                                    <ul>
                                        <h4>Swimwear</h4>
                                        <li>Bikini Sets</li>
                                        <li>Cover-ups</li>
                                    </ul>
                                    <ul>
                                        <h4>Muslim Fashion</h4>
                                        <li>Abaya</li>
                                        <li>Women's Hijabs</li>
                                        <li>Muslim Sets</li>
                                        <li>Prayer Hats</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>bottoms</h4>
                                        <li>Leggings</li>
                                        <li>Skirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Pants & Capris</li>
                                    </ul>
                                    <ul>
                                        <h4>Plus Size Cloths</h4>
                                        <li>Plus Size Dresses</li>
                                        <li>Plus Size T-Shirts</li>
                                        <li>Plus Size Sets</li>
                                        <li>Plus Size Pants & Capris</li>
                                        <li>Plus Size Outwear</li>
                                        <li>Plus Size Blouses & Shirts</li>
                                    </ul>
                                    <ul>
                                        <h4>Wedding & Events</h4>
                                        <li>Wedding Dresses</li>
                                        <li>Prom Dresses</li>
                                        <li>Evening Dresses</li>
                                        <li>Africa Clothing</li>
                                        <li>Cosplay Costumes</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>Women's Underwear</h4>
                                        <li>Pajama Sets</li>
                                        <li>Bras</li>
                                        <li>Panties</li>
                                        <li>Women's Socks</li>
                                        <li>Bra & Brief Sets</li>
                                        <li>Shapwear</li>
                                    </ul>
                                    <ul>
                                        <h4>Accessories</h4>
                                        <li>Hair Accessories</li>
                                        <li>Sunglasses</li>
                                        <li>Blue Light Blocking Glasses</li>
                                        <li>Baseball Caps</li>
                                        <li>Bucket Hats</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div>
                                    images
                                </div>
                            </div>
                        </li>
                        <li className="dropDown"><div className="flex"><FaVenus /> Beauty Health & Hair</div>
                            <div className="mega-menu">
                                <div>
                                    <ul>
                                        <h4>Women's Fashion</h4>
                                        <li>Dress</li>
                                        <li>Tees</li>
                                        <li>Blouses & Shirts</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Women's Sets</li>
                                        <li>Suits & Blazers</li>
                                        <li>Bodysuits</li>
                                        <li>Tanks & Camis</li>
                                        <li>Coats & Jackets</li>
                                        <li>Sweaters</li>
                                    </ul>
                                    <ul>
                                        <h4>Swimwear</h4>
                                        <li>Bikini Sets</li>
                                        <li>Cover-ups</li>
                                    </ul>
                                    <ul>
                                        <h4>Muslim Fashion</h4>
                                        <li>Abaya</li>
                                        <li>Women's Hijabs</li>
                                        <li>Muslim Sets</li>
                                        <li>Prayer Hats</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>bottoms</h4>
                                        <li>Leggings</li>
                                        <li>Skirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Pants & Capris</li>
                                    </ul>
                                    <ul>
                                        <h4>Plus Size Cloths</h4>
                                        <li>Plus Size Dresses</li>
                                        <li>Plus Size T-Shirts</li>
                                        <li>Plus Size Sets</li>
                                        <li>Plus Size Pants & Capris</li>
                                        <li>Plus Size Outwear</li>
                                        <li>Plus Size Blouses & Shirts</li>
                                    </ul>
                                    <ul>
                                        <h4>Wedding & Events</h4>
                                        <li>Wedding Dresses</li>
                                        <li>Prom Dresses</li>
                                        <li>Evening Dresses</li>
                                        <li>Africa Clothing</li>
                                        <li>Cosplay Costumes</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>Women's Underwear</h4>
                                        <li>Pajama Sets</li>
                                        <li>Bras</li>
                                        <li>Panties</li>
                                        <li>Women's Socks</li>
                                        <li>Bra & Brief Sets</li>
                                        <li>Shapwear</li>
                                    </ul>
                                    <ul>
                                        <h4>Accessories</h4>
                                        <li>Hair Accessories</li>
                                        <li>Sunglasses</li>
                                        <li>Blue Light Blocking Glasses</li>
                                        <li>Baseball Caps</li>
                                        <li>Bucket Hats</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div>
                                    images
                                </div>
                            </div>
                        </li>
                        <li className="dropDown"><div className="flex"><FaCottonBureau /> Automobiles & Motorcycles</div>
                            <div className="mega-menu">
                                <div>
                                    <ul>
                                        <h4>Women's Fashion</h4>
                                        <li>Dress</li>
                                        <li>Tees</li>
                                        <li>Blouses & Shirts</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Women's Sets</li>
                                        <li>Suits & Blazers</li>
                                        <li>Bodysuits</li>
                                        <li>Tanks & Camis</li>
                                        <li>Coats & Jackets</li>
                                        <li>Sweaters</li>
                                    </ul>
                                    <ul>
                                        <h4>Swimwear</h4>
                                        <li>Bikini Sets</li>
                                        <li>Cover-ups</li>
                                    </ul>
                                    <ul>
                                        <h4>Muslim Fashion</h4>
                                        <li>Abaya</li>
                                        <li>Women's Hijabs</li>
                                        <li>Muslim Sets</li>
                                        <li>Prayer Hats</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>bottoms</h4>
                                        <li>Leggings</li>
                                        <li>Skirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Pants & Capris</li>
                                    </ul>
                                    <ul>
                                        <h4>Plus Size Cloths</h4>
                                        <li>Plus Size Dresses</li>
                                        <li>Plus Size T-Shirts</li>
                                        <li>Plus Size Sets</li>
                                        <li>Plus Size Pants & Capris</li>
                                        <li>Plus Size Outwear</li>
                                        <li>Plus Size Blouses & Shirts</li>
                                    </ul>
                                    <ul>
                                        <h4>Wedding & Events</h4>
                                        <li>Wedding Dresses</li>
                                        <li>Prom Dresses</li>
                                        <li>Evening Dresses</li>
                                        <li>Africa Clothing</li>
                                        <li>Cosplay Costumes</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>Women's Underwear</h4>
                                        <li>Pajama Sets</li>
                                        <li>Bras</li>
                                        <li>Panties</li>
                                        <li>Women's Socks</li>
                                        <li>Bra & Brief Sets</li>
                                        <li>Shapwear</li>
                                    </ul>
                                    <ul>
                                        <h4>Accessories</h4>
                                        <li>Hair Accessories</li>
                                        <li>Sunglasses</li>
                                        <li>Blue Light Blocking Glasses</li>
                                        <li>Baseball Caps</li>
                                        <li>Bucket Hats</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div>
                                    images
                                </div>
                            </div>
                        </li>
                        <li className="dropDown"><div className="flex"><FaDraft2Digital /> Tools & Home Improvement</div>
                            <div className="mega-menu">
                                <div>
                                    <ul>
                                        <h4>Women's Fashion</h4>
                                        <li>Dress</li>
                                        <li>Tees</li>
                                        <li>Blouses & Shirts</li>
                                        <li>Hoodies & Sweatshirts</li>
                                        <li>Women's Sets</li>
                                        <li>Suits & Blazers</li>
                                        <li>Bodysuits</li>
                                        <li>Tanks & Camis</li>
                                        <li>Coats & Jackets</li>
                                        <li>Sweaters</li>
                                    </ul>
                                    <ul>
                                        <h4>Swimwear</h4>
                                        <li>Bikini Sets</li>
                                        <li>Cover-ups</li>
                                    </ul>
                                    <ul>
                                        <h4>Muslim Fashion</h4>
                                        <li>Abaya</li>
                                        <li>Women's Hijabs</li>
                                        <li>Muslim Sets</li>
                                        <li>Prayer Hats</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>bottoms</h4>
                                        <li>Leggings</li>
                                        <li>Skirts</li>
                                        <li>Shorts</li>
                                        <li>Jeans</li>
                                        <li>Pants & Capris</li>
                                    </ul>
                                    <ul>
                                        <h4>Plus Size Cloths</h4>
                                        <li>Plus Size Dresses</li>
                                        <li>Plus Size T-Shirts</li>
                                        <li>Plus Size Sets</li>
                                        <li>Plus Size Pants & Capris</li>
                                        <li>Plus Size Outwear</li>
                                        <li>Plus Size Blouses & Shirts</li>
                                    </ul>
                                    <ul>
                                        <h4>Wedding & Events</h4>
                                        <li>Wedding Dresses</li>
                                        <li>Prom Dresses</li>
                                        <li>Evening Dresses</li>
                                        <li>Africa Clothing</li>
                                        <li>Cosplay Costumes</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4>Women's Underwear</h4>
                                        <li>Pajama Sets</li>
                                        <li>Bras</li>
                                        <li>Panties</li>
                                        <li>Women's Socks</li>
                                        <li>Bra & Brief Sets</li>
                                        <li>Shapwear</li>
                                    </ul>
                                    <ul>
                                        <h4>Accessories</h4>
                                        <li>Hair Accessories</li>
                                        <li>Sunglasses</li>
                                        <li>Blue Light Blocking Glasses</li>
                                        <li>Baseball Caps</li>
                                        <li>Bucket Hats</li>
                                        <li>Belts</li>
                                    </ul>
                                </div>
                                <div>
                                    images
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="slider">
                    <div className="links">
                        <ul>
                            <li>PLUS</li>
                            <li className="links-hovered">Cool Home Gadgets</li>
                            <li className="links-hovered">Super Deals</li>
                            <li className="links-hovered">New User Zone</li>
                        </ul>
                    </div>
                    <Slider slides={SlideData} />
                    <Banner />
                </div>

                <div className="account">
                    <div className="bg-img">
                        <img src={acc} alt="account" />

                    </div>
                    {isLoggedin ? (<div>
                        <h4>{`${loggedUser[0].name}`}</h4>
                        <div className="d-flex">
                            <div className="col">
                                <img src={acc} alt="account" /><br />
                                <span>Accounts</span>
                            </div>
                            <div className="col">
                                <IoReaderOutline />
                                <span>orders</span>
                            </div>
                            <div className="col">
                                <IoChatboxEllipsesOutline />
                                <span>message</span>
                            </div>
                        </div>
                    </div>) : (<div>
                        <h4>Welcome to AliExpress</h4>
                        <RegSignin bgcl1={bgcl1} cl1={cl1} rd={rd} bgcl2={bgcl2} cl2={cl2} />

                    </div>)}
                    <div className="inner-acc">
                        <span>Exclusive offers</span>
                        <h4>Just for new AliExpress <br /> members</h4>
                        <div className="carousel">
                            <div className="card">
                                <img src={miniCarousel1} alt="img1" />
                                <div className="amt">N1,578</div>
                            </div>
                            <div className="card">
                                <img src={miniCarousel2} alt="img2" />
                                <div className="amt">N2,578</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <Link className="superD">
                        <div className="top">
                            <div className="col">
                                <img src={superD} alt="img" />
                                <span>Top Products. Incredible prices</span>
                                <div className="timer">
                                    <span>16</span> : <span>33</span> : <span>20</span>
                                </div>
                            </div>
                            <div className="col">View more</div>

                        </div>
                        <div className="content">
                            {product.filter((data) => data.name === "sweater").slice(0, 6).map((data) => (
                                <Link to={`/product/${data._id}`} className="box">
                                    <div className="img">
                                        <img src={`http://159.65.21.42:9000${data.image}`} alt="img" />
                                    </div>
                                    <h5>{data.price}</h5>
                                    <span>{data.quantity} quantity</span>
                                </Link>
                            ))}
                        </div>
                    </Link>

                    <div className="break">
                        <BreakSection text="More to Love" />
                    </div>
                    <div className="superD bg-default">
                        <div className="sec content">
                            {product.slice(0, 24).map((data) => (
                                <Link to={`/product/${data._id}`} className="box">
                                    <div className="img">
                                        <img src={`http://159.65.21.42:9000${data.image}`} alt="img" />
                                    </div>
                                    <div className="message">
                                        <h5 className="red-cl">NGN {data.price}</h5>
                                        <h6 className="red-cl">Extra 2% off with coin</h6>
                                        <span>{data.quantity * 3} sold <TiStarFullOutline /> 4.7</span>
                                        <p className="desc">{data.description}</p>
                                        <span className="f-shipping">Free Shipping</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <SubFooter />
        </div>
    )
}
export default Homepage;