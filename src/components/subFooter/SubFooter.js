import React from 'react';
import { ImCoinDollar, ImUsers, ImTruck, ImCreditCard } from 'react-icons/im';
import { HiOutlineShieldCheck } from 'react-icons/hi2';
import "./subfooter.css";

export const SubFooter = () => {
    return (
        <div className="footer">
            <ul className='links'>
                <li>Discover more </li>
                <li>Shirts</li>
                <li>Dresses</li>
                <li>Aliexpress</li>
            </ul>
            <div className="top">
                <div className="col">
                    <ImCoinDollar />
                    <h5>Great value</h5>
                    <p>We offer competitive preices <br /> on over 100 million items.</p>
                </div>
                <div className="col">
                    <ImTruck />
                    <h5>Worldwide shopping</h5>
                    <p>We ship to over 200 countries <br /> and regions, and our site <br /> comes in 12 languages</p>
                </div>
                <div className="col">
                    <ImCreditCard />
                    <h5>Safe payment</h5>
                    <p>pay with the world's most <br />popular and secure payment <br />methods</p>
                </div>
                <div className="col">
                    <HiOutlineShieldCheck />
                    <h5>Shop with confidence</h5>
                    <p>    Our Buyer Protection policy <br /> covers your entire purchase <br />journey.
                    </p>
                </div>
                <div className="col">
                    <ImUsers />
                    <h5>Help center</h5>
                    <p>Round-the-clock assitance <br /> for a smooth shopping <br /> experience</p>
                </div>
                <div className="col">
                    <h5>Shop better</h5>
                    <p><span>Download the app</span>for mobile- <br />only features such as image <br />search and discount games</p>
                </div>
            </div>
            <div className="bottom">
                <div className="col">
                    <h5>Stay connected</h5>
                    <div>images</div>
                </div>
                <div className="col2">
                    <ul>
                        <h5>Shopping with us</h5>
                        <li>Making payments</li>
                        <li>Delivery options</li>
                        <li>Buyer Protection</li>
                    </ul>
                    <ul>
                        <h5>Customers service</h5>
                        <li>Help Center</li>
                        <li>Transaction Services Agreement for non-EU/UK Consumers</li>
                        <li>Terms and Conditions for EU/EEA/UK</li>
                        <li>Consumers (Transactions)</li>
                        <li>Take our feedback survey</li>
                    </ul>
                    <ul>
                        <h5>Collaborate with us</h5>
                        <li>Partnerships</li>
                        <li>Affiliate program</li>
                        <li>DS Center</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
