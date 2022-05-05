import React from 'react'
import { ExternalLink } from 'react-external-link'
import './search.css'

const Search = () => {
    return (
        <div className='search-item'>
            <img className='search-img' src='https://t-cf.bstatic.com/xdata/images/hotel/square600/318356184.webp?k=b09e1111e89a31f5722da97ac76f65a504d16f9e93e494e4c5bca497d8d15da3&o=&s=1' alt='hotel' />
            <div className='search-description'>
                <ExternalLink href='#' className='si-title'> Tower Street Apartments</ExternalLink>
                <span className='si-distance'>500m from the center</span>
                <span className='si-taxi'>Free airport taxi</span>
                <div className='sd-details'>
                    <span className='si-subtitle'>Studio Apartment with Air conditioning</span>
                    <span className='si-features'>Entire apartment • 1 bedroom • 1 bathroom • 15m²
                        2 beds (1 double, 1 sofa bed)</span>
                    <span className='si-cancel'>Free cancellation</span>
                    <span className='si-cancel-option'>You can cancel later, so lock in this great price today!</span>
                </div>
            </div>
            <div className='search-details'>
                <div className='si-rating'>
                    <span>
                        Excellent
                        <button>8.0</button>
                    </span> 
                </div>
                <div className='si-details'>
                    <span className='si-price'>$123</span>
                    <span className='si-charges'>Includes taxes and charges</span>
                    <span className='si-button'>See availability</span>
                </div>
            </div>
        </div>
    )
}

export default Search