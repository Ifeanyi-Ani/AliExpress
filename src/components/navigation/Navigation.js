import React from "react";
import { IoCaretDown, IoPersonOutline } from "react-icons/io5"
import { IoIosHeartEmpty, IoMdPhonePortrait } from "react-icons/io"
import flag from "../../images/flag.png"
import { RegSignin } from "../reg_signin/Reg_Signin";

import { useContext } from "react";
import { ContextData } from "../../context/ContextData";
import Logout from "../Logout";
import "./navigation.css";
function Navigation() {
    const { isLoggedin, loggedUser } = useContext(ContextData);
    let bgcl1 = "#ff4747", cl1 = "#fff", rd = "none", bgcl2 = "#fff1f1", cl2 = "#ff4747"

    return (
        <nav>
            <ul className="nav-links">
                <li className="bdr-rght drop-down">Sell on Aliexpress <span><IoCaretDown /></span>
                    <div className="mega-menu">
                        <ul>
                            <li>Sellers log in</li>
                            <li>Non chinese seller</li>
                        </ul>
                    </div>
                </li>
                <li className="drop-down">Help <span><IoCaretDown /></span>
                    <div className="mega-menu">
                        <ul>
                            <li>Help Center</li>
                            <li>Disputes & Reports</li>
                            <li>Reports IPR InfringmentS</li>
                        </ul>
                    </div>
                </li>
                <li>Buyer Protecion</li>
                <li className="bdr-rght"><span><IoMdPhonePortrait /></span> App</li>
                <li className="bdr-rght drop-down"><span><img src={flag} alt="NigeriaFlag" /></span>/English/NGN <span><IoCaretDown /></span>
                    <div className="mega-menu">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="">Ship to</label>
                                <select name="" id="">
                                    <option value="Nigeria">Nigera</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Language</label>
                                <select name="" id="">
                                    <option value="English">English</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Currency</label>
                                <select name="" id="">
                                    <option value="Naira">NGN(Nigeria Naira)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button>Save</button>
                            </div>

                        </form>
                    </div>
                </li>
                <li><span><IoIosHeartEmpty /></span>Wish List</li>
                <li className="drop-down"><span><IoPersonOutline /></span> Account <span><IoCaretDown /></span>
                    <div className="mega-menu">
                        {isLoggedin ? (<div className="loggedCon">
                            <span className="logged">Welcome back, <br />{`${loggedUser[0].name}`}</span>
                            <Logout />
                        </div>) : (
                            <div>
                                <span>Welcome to AliExpress</span>
                                <RegSignin bgcl1={bgcl1} cl1={cl1} rd={rd} bgcl2={bgcl2} cl2={cl2} />
                            </div>
                        )}
                        <ul>
                            <li>My Orders</li>
                            <li>My Coins</li>
                            <li>Message Center</li>
                            <li>Payments</li>
                            <li>Wish List</li>
                            <li>My Favourite Stores</li>
                            <li>My Coupon</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;