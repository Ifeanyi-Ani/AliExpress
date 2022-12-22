import React from 'react';
import { IoSearch, IoCaretDown } from 'react-icons/io5';
import { CartpageLink } from '../cartpage-link/CartpageLink';
import { HomepageLink } from '../homepage-link/HomepageLink';
import './header.css'
export const Header = () => {
    return (
        <div className='header'>
            <div className="inner">
                <div className="col">
                    <HomepageLink />
                </div>
                <div className="col2">
                    <div className="search-wrapper">
                        <input type="text" name="" placeholder='iphone 11 pro max case' id="" />
                        <select name="" id="">
                            <option value="">All Categories <IoCaretDown /></option>
                            <option value="">Food</option>
                            <option value="">Home Appliances</option>
                            <option value="">Computer & Office</option>
                            <option value="">Home Improvement</option>
                            <option value="">Home & Garden</option>
                            <option value="">Sports & Entertainment</option>
                            <option value="">Education & Office Appliances</option>
                        </select>
                        <button><IoSearch /></button>
                    </div>
                    <ul>
                        <li>win max 2 gpd</li>
                        <li>infinix hot 20</li>
                        <li>mini smartpone</li>
                        <li>yeezy boost 350</li>
                        <li>3pcs pt31 lg40</li>
                        <li>camo joggers men</li>
                    </ul>
                </div>
                <div className="col3">
                    <CartpageLink />
                </div>
            </div>
        </div>
    )
}
