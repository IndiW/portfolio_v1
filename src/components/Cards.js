import React, { forwardRef, useRef } from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards(props) {
    return (
        <div className='cards'>
            <h1 ref={props.curref}>my projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/dimitri-bong-eBr47chv3jM-unsplash.jpg'
                            text='James - Philosophy Corpora Analyzer'
                            desc='A web app which combines topic modelling and sentiment analysis to examine how the ideas of the philosopher William James changed over time.'
                            label='React, Python, Flask, gensim, nltk'
                            path='/githublink'
                        />
                        <CardItem
                            src='images/matchatmac.JPG'
                            text='Match at Mac'
                            desc='Lightweight dating website for McMaster University students which amassed over 1000 users.'
                            label='HTML, CSS, Javascript, Python, SQL'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/hamilton.JPG'
                            text='HamiltonVoiceAssistant'
                            desc='Voice assistant web app built for users to explore various tourist locations in the hamilton community.'
                            label='HTML, Javascript, Bing maps API, annyang'
                            path='/services'
                        />
                        <CardItem
                            src='images/test.jpg'
                            text='McMaster Mars Rover Soil Analysis Tool'
                            desc='Python script which utilizes computer vision to identify and categorize different soil samples based on microscope images. Utilized on the McMaster Mars Rover Science module for the University Rover Competition.'
                            label='Python, OpenCV'
                            path='/products'
                        />
                        <CardItem
                            src='images/test.jpg'
                            text='Online Portfolio'
                            desc='ie this website!'
                            label='React, HTML, CSS, Javascript'
                            path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
