import React from 'react'
import { ExternalLink } from 'react-external-link'

import './featured-properties.css'

const FeaturedProperties = () => {
    return (
        <div className='featured-property'>
            <ExternalLink className='fp-item' href='https://www.booking.com/'>
                <img className='fp-image' alt='' src='https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/46176254.jpg?k=494d9b3f2efe803f81042995cf3849bb47c7896ec297989048fab4c8f399a1e0&o=&hp=1' />
                <span className='fp-name'>Artemis Princess Hotel</span>
                <span className='fp-city'>Alanya, Turkey</span>
                <span className='fp-price'>Starting from KES 4,018</span>
                <div className='fp-rating'>
                    <button>6.7</button>
                    <span>Pleasant</span>
                </div>
            </ExternalLink>
            <ExternalLink className='fp-item' href='https://www.booking.com/'>
                <img className='fp-image' alt='' src='https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/30959087.jpg?k=e5958f112f412e9ee39b7d3069c6c39c2400c584d12e4043658dbc7c498a912d&o=&hp=1' />
                <span className='fp-name'>Midtown Apartments</span>
                <span className='fp-city'>Barcelona</span>
                <span className='fp-price'>Starting from KES 41,433</span>
                <div className='fp-rating'>
                    <button>9.4</button>
                    <span>Wonderful</span>
                </div>
            </ExternalLink>
            <ExternalLink className='fp-item' href='https://www.booking.com/'>
                <img className='fp-image' alt='' src='https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/4719420.jpg?k=3ba0e2b157ee275a4ee9bd45267e49e432ed25c697f1f6076ba9c9587e29830d&o=&hp=1' />
                <span className='fp-name'>Miwa Apartments</span>
                <span className='fp-city'>Budapest</span>
                <span className='fp-price'>Starting from KES 23,154</span>
                <div className='fp-rating'>
                    <button>9.4</button>
                    <span>Wonderful</span>
                </div>
            </ExternalLink>
            <ExternalLink className='fp-item' href='https://www.booking.com/'>
                <img className='fp-image' alt='' src='https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/30958911.jpg?k=7a990724f29ba1c32f68f79e7ca9544efe9f3311885d458fe8c95a12b5a54b5c&o=&hp=1' />
                <span className='fp-name'>Riad Tamazouzte</span>
                <span className='fp-city'>Spain</span>
                <span className='fp-price'>Starting from KES 36,018</span>
                <div className='fp-rating'>
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </ExternalLink>
            <ExternalLink className='fp-item' href='https://www.booking.com/'>
                <img className='fp-image' alt='' src='https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/73542095.jpg?k=4d0a2d2ba9598ebf518a9dceaa3c20c580f7e6136763e9a69d41e69541eb9a45&o=&hp=1' />
                <span className='fp-name'>Sugar Loft Apartments</span>
                <span className='fp-city'>Rio de Janeiro</span>
                <span className='fp-price'>Starting from KES 6,018</span>
                <div className='fp-rating'>
                    <button>9.0</button>
                    <span>Excellent</span>
                </div>
            </ExternalLink>
            <ExternalLink className='fp-item' href='https://www.booking.com/'>
                <img className='fp-image' alt='' src='https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/200105171.jpg?k=a86b65809407d149184066dfcd56c50ada2b02d168ef978bd640b5516ec21753&o=&hp=1' />
                <span className='fp-name'>Dar Salam Palm</span>
                <span className='fp-city'>Morocco</span>
                <span className='fp-price'>Starting from KES 16,018</span>
                <div className='fp-rating'>
                    <button>9.0</button>
                    <span>Excellent</span>
                </div>
            </ExternalLink>
            <ExternalLink className='fp-item' href='https://www.booking.com/'>
                <img className='fp-image' alt='' src='https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/319118583.jpg?k=6344a42c96b6f8b407456ad06a82c96ce80ba2f11cbaa746769a144dc5a1a6bf&o=&hp=1' />
                <span className='fp-name'>Pestana CR7 Marrakech</span>
                <span className='fp-city'>Hivernage, Marrakesh</span>
                <span className='fp-price'>Starting from KES 25,255</span>
                <div className='fp-rating'>
                    <button>8.5</button>
                    <span>Very Good</span>
                </div>
            </ExternalLink>
        </div>
    )
}

export default FeaturedProperties