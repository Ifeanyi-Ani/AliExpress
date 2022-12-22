import React from 'react'
import { Carousel } from '../carousel/Carousel'
import "./banner.css"

export const Banner = () => {
    return (
        <div className="banner">
            <div className="col1">
                <h4>Welcome to AliExpress</h4>
                <span>Get items up to 70% off or <br /> get a coupon!</span>
                <div className="amt">NGN 1, 778.91</div>
            </div>
            <Carousel />
        </div>
    )
}
