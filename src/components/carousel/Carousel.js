import React from 'react'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import { IoChevronForwardOutline } from 'react-icons/io5';
import { IoChevronBackOutline } from 'react-icons/io5';
import carousel1 from "../../images/carousel1.webp";
import carousel2 from "../../images/carousel2.webp";
import carousel3 from "../../images/carousel3.webp";
import carousel4 from "../../images/carousel4.webp";
import carousel5 from "../../images/carousel5.webp";
import carousel6 from "../../images/carousel6.webp";
import carousel7 from "../../images/carousel7.webp";
import carousel8 from "../../images/carousel8.webp";
import carousel9 from "../../images/carousel9.webp";
import carousel10 from "../../images/carousel10.webp";
import carousel11 from "../../images/carousel11.webp";
import carousel12 from "../../images/carousel12.webp";
import "./carousel.css"

export const Carousel = () => {
    return (
        <div className="caro-wrap">
            <div className="carousa">

                <div className="card">
                    <div className="img">
                        <img src={carousel1} alt="img1" />
                        <div className="amt">NGN 444.72</div>
                    </div>
                    <span>NGN 1,534.31</span>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={carousel2} alt="img1" />
                        <div className="amt">NGN 444.72</div>
                    </div>
                    <span>NGN 1,534.31</span>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={carousel3} alt="img1" />
                        <div className="amt">NGN 444.72</div>
                    </div>
                    <span>NGN 1,534.31</span>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={carousel4} alt="img1" />
                        <div className="amt">NGN 444.72</div>
                    </div>
                    <span>NGN 1,534.31</span>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={carousel5} alt="img1" />
                        <div className="amt">NGN 444.72</div>
                    </div>
                    <span>NGN 1,534.31</span>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={carousel6} alt="img1" />
                        <div className="amt">NGN 444.72</div>
                    </div>
                    <span>NGN 1,534.31</span>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={carousel7} alt="img1" />
                        <div className="amt">NGN 444.72</div>
                    </div>
                    <span>NGN 1,534.31</span>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={carousel8} alt="img1" />
                        <div className="amt">NGN 444.72</div>
                    </div>
                    <span>NGN 1,534.31</span>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={carousel9} alt="img1" />
                        <div className="amt">NGN 444.72</div>
                    </div>
                    <span>NGN 1,534.31</span>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={carousel10} alt="img1" />
                        <div className="amt">NGN 444.72</div>
                    </div>
                    <span>NGN 1,534.31</span>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={carousel11} alt="img1" />
                        <div className="amt">NGN 444.72</div>
                    </div>
                    <span>NGN 1,534.31</span>
                </div>
                <div className="card">
                    <div className="img">
                        <img src={carousel12} alt="img1" />
                        <div className="amt">NGN 444.72</div>
                    </div>
                    <span>NGN 1,534.31</span>
                </div>
                <div className="slid-btn prev"><IoChevronBackOutline /></div>
                <div className="slid-btn next"><IoChevronForwardOutline /></div>
            </div>
        </div>
    )
}
