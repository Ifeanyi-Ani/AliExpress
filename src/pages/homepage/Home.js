import React from "react";
import { VscListUnordered } from "react-icons/vsc"
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
import { IoReaderOutline, IoChatboxEllipsesOutline, IoPersonSharp } from 'react-icons/io5'

import BreakSection from "../../components/sign-with/BreakSection";
import { useContext } from "react";
import { ContextData } from "../../context/ContextData";

import "./home.css";
function Homepage() {
    const { isLoggedin, loggedUser } = useContext(ContextData)
    let bgcl1 = "linear-gradient(to right, #ff0e0b, #ff7137)", cl1 = "#fff", rd = "20px", bgcl2 = "#f5f5f5", cl2 = "#333"
    return (
        <div className="home-container">
            <Header />
            <div className="grid-container">

                <div className="side-nav">
                    <div className="flex"><VscListUnordered /> Categories</div>
                    <ul className="cate-items">
                        {/* <li className="dropDown"><div className="flex"><VscListUnordered /> Women's Fashion</div>
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
                        <li className="dropDown"><div className="flex"><VscListUnordered /> <Link to="/products">Men's Fashion</Link></div>
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
                        <li className="dropDown"><div className="flex"><VscListUnordered /> Phones & Telecommunications</div>
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
                        <li className="dropDown"><div className="flex"><VscListUnordered /> Computer Office & security</div>
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
                        <li className="dropDown"><div className="flex"><VscListUnordered /> Consumers Electronics</div>
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
                        <li className="dropDown"><div className="flex"><VscListUnordered /> Jewelry & Watches</div>
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
                        <li className="dropDown"><div className="flex"><VscListUnordered /> Home Pets & Appliances</div>
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
                        <li className="dropDown"><div className="flex"><VscListUnordered /> Bags & Shoes</div>
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
                        <li className="dropDown"><div className="flex"><VscListUnordered /> Toys Kids & Babies</div>
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
                        <li className="dropDown"><div className="flex"><VscListUnordered /> Outdoor Fun & Sports</div>
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
                        <li className="dropDown"><div className="flex"><VscListUnordered /> Beauty Health & Hair</div>
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
                        <li className="dropDown"><div className="flex"><VscListUnordered /> Automobiles & Motorcycles</div>
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
                        <li className="dropDown"><div className="flex"><VscListUnordered /> Tools & Home Improvement</div>
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
                        </li> */}
                        <li className="dropDown"><div className="flex"><IoPersonSharp /> <Link to="/products">Men's Fashion</Link></div>

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
                            <div className="box">
                                <div className="img">
                                    <img src={miniCarousel1} alt="img" />
                                </div>
                                <h5>NGN 4,777</h5>
                                <span>70352 quantity</span>
                            </div>
                            <div className="box">
                                <div className="img">
                                    <img src={miniCarousel1} alt="img" />
                                </div>
                                <h5>NGN 4,777</h5>
                                <span>70352 quantity</span>
                            </div>
                            <div className="box">
                                <div className="img">
                                    <img src={miniCarousel1} alt="img" />
                                </div>
                                <h5>NGN 4,777</h5>
                                <span>70352 quantity</span>
                            </div>
                            <div className="box">
                                <div className="img">
                                    <img src={miniCarousel1} alt="img" />
                                </div>
                                <h5>NGN 4,777</h5>
                                <span>70352 quantity</span>
                            </div>
                            <div className="box">
                                <div className="img">
                                    <img src={miniCarousel1} alt="img" />
                                </div>
                                <h5>NGN 4,777</h5>
                                <span>70352 quantity</span>
                            </div>
                            <div className="box">
                                <div className="img">
                                    <img src={miniCarousel1} alt="img" />
                                </div>
                                <h5>NGN 4,777</h5>
                                <span>70352 quantity</span>
                            </div>
                        </div>
                    </Link>

                    <div className="break">
                        <BreakSection text="Feature Categories" />
                    </div>
                    <div className="sec">
                        <div className="col1">
                            <img src={miniCarousel2} alt="img" />
                        </div>
                    </div>
                </div>

            </div>

            <SubFooter />
        </div>
    )
}
export default Homepage;