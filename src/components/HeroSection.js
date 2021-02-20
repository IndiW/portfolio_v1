import React, { forwardRef, useRef } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import myVideo from "../videos/SoumyaPexels.mp4";
import Cards from './Cards';

function HeroSection() {
    const titleRef = useRef()
    function handleBackClick() {
        titleRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <div className='hero-container'>
                <video src={myVideo} type="video/mp4" autoPlay loop muted />
                <h1>indika w.</h1>
                <p>I'm just trying to make cool things. Check out my side projects.</p>
                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        onClick={handleBackClick}
                    >
                        projects
                </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        onClick={console.log('hey')}
                        link='/Blog'
                    >
                        blog
                </Button>
                </div>
                <div>

                </div>
            </div>
            <Cards curref={titleRef} />
        </>
    );
}

export default HeroSection;