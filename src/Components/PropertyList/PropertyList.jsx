import React from 'react'

import './property-list.css'

const PropertyList = () => {
    return (
        <div className='p-list'>
            <div className='plist-item'>
                <img className='plist-img' alt='' src='https://plutproperties.com/wp-content/uploads/2022/04/1-1.jpg' />
                <div className='plist-title'>
                    <h1>Hotels</h1>
                    <h2>857,215 </h2>
                </div>
            </div>
            <div className='plist-item'>
                <img className='plist-img' alt='' src='https://www.travelplusstyle.com/wp-content/gallery/cache/35126__940x_rs2883_amanemu-suite-interior.jpg' />
                <div className='plist-title'>
                    <h1>B&Bs</h1>
                    <h2>195,596</h2>
                </div>
            </div>
            <div className='plist-item'>
                <img className='plist-img' alt='' src='https://images1.apartments.com/i2/vJwC0zY17QGjkiyi5ZEQyuWMb3lQJ-W0PNTrdJhbIAQ/111/lincoln-square-philadelphia-pa-primary-photo.jpg?p=1' />
                <div className='plist-title'>
                    <h1>Apartments</h1>
                    <h2>803,530 </h2>
                </div>
            </div>
            <div className='plist-item'>
                <img className='plist-img' alt='' src='https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/73541950.jpg?k=4a0c855befd121c1d8e13673c24ec03cc1a137049c94df07cc26273097d10b0f&o=&hp=1' />
                <div className='plist-title'>
                    <h1>resorts</h1>
                    <h2>17,740 </h2>
                </div>
            </div>
            <div className='plist-item'>
                <img className='plist-img' alt='' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/79/c3/26/the-front-view-of-diani.jpg?w=900&h=-1&s=1' />
                <div className='plist-title'>
                    <h1>Villas</h1>
                    <h2>420,974 </h2>
                </div>
            </div>
            <div className='plist-item'>
                <img className='plist-img' alt='' src='https://images.ctfassets.net/gxwgulxyxxy1/0Bu5ExcClizeeLLxT0tiB/999893b65383b25aa67e28e82dd53519/1c1d81b0-162b-4f81-a742-271cd4e64204.lg1.jpg' />
                <div className='plist-title'>
                    <h1>Cabins</h1>
                    <h2>33,168</h2>
                </div>
            </div>
            
            <div className='plist-item'>
                <img className='plist-img' alt='' src='https://moneyinc.com/wp-content/uploads/2016/05/Vacation-Home.jpg' />
                <div className='plist-title'>
                    <h1>vacation homes</h1>
                    <h2>420,974</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList