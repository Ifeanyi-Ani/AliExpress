import React, { useState, useEffect } from 'react';
import { SlideData } from './SlideData';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { IoChevronBackOutline } from 'react-icons/io5';
import "./slider.css";

const Slider = ({ slides }) => {
    const [index, setIndex] = useState(0);
    const length = slides.length
    let auto_play = true;
    let set_time;
    let time = 5000;

    const nextSlide = () => {
        setIndex(index === length - 1 ? 0 : index + 1);
    }
    const prevSlide = () => {
        setIndex(index === 0 ? length - 1 : index - 1);
    }
    const move = (idx) => {
        setIndex(idx)
    }
    const autoPlay = () => {
        set_time = setInterval(nextSlide, time);
    }
    useEffect(() => {
        if (auto_play) {
            autoPlay()
        }
        return () => clearInterval(set_time);
    }, [index])
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div className='slides'>
            <div className="btns">
                <button onClick={prevSlide}><IoChevronBackOutline /></button>
                <button id="btn_next" onClick={nextSlide}><IoChevronForwardOutline></IoChevronForwardOutline></button>
            </div>
            <div className="btnDot">
                {Array.from({ length }).map((item, ind) => (
                    <div
                        onClick={() => move(ind)}
                        className={index === ind ? "dot activate" : "dot"}
                        key={ind}>
                    </div>
                ))}
            </div>
            {SlideData.map((img, idx) => (
                <div className={idx === index ? "slide active" : "slide"} key={idx}>
                    <img src={img.image} alt="slides" />
                </div>
            ))}

        </div>
    )
}

export default Slider;
