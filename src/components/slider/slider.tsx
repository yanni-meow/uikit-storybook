import React, { useState } from 'react';

import './style.scss';

interface Items {
    title: string;
    bg: string;
    link?: string;
}
interface SliderProps {
    items: Items[];
}

export const Slider = (props: SliderProps) => {
    const { items } = props
    const [activeSlide, setActiveSlide] = useState(0)

    const slides = items.map((el, index) => {
        return (
            <a 
                href={el.link}
                key={index} 
                className='slider__item'
                style={{ 
                    display: activeSlide === index ? 'flex' : 'none',
                    backgroundImage: `url(${el.bg})`,
                }}
            >
                <div className='slider__item__text'>{el.title}</div>
            </a>
        )
    })
    const dots = items.map((el, index) => {
        console.log(el)
        return (
            <span 
                key={index} 
                className={activeSlide === index ? 'slider__nav__item__active' : 'slider__nav__item' } 
                onClick={() => setActiveSlide(index)}
            ></span>
        )
    })

    return (
        <div className='slider__box'>
            <div className='slider'>
                {slides}
            </div>
            <div className='slider__nav'>
                {dots}
            </div>
        </div>
    )
}