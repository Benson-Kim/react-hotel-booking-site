import React from 'react'
import './featured.css'

const Featured = () => {
  return (
      <div className='featured'>
          <div className='featured-item'>
              <img className='featured-img' alt='' src='https://www.travelplusstyle.com/wp-content/gallery/cache/35121__940x_cavo6d54aece-9c1b-463a-8065-9e7518add869.jpg' />
              <div className='featured-title'>
                  <h2>St. Regis, Maldives</h2>
                  <h3>325 Properties</h3>
              </div>
          </div>
          <div className='featured-item'>
              <img className='featured-img' alt='' src='https://www.travelplusstyle.com/wp-content/gallery/cache/35126__940x_rs2883_amanemu-suite-interior.jpg' />
              <div className='featured-title'>
                  <h2>Amanemu, Japan</h2>
                  <h2>109 Properties</h2>
              </div>
          </div>
          <div className='featured-item'>
              <img className='featured-img' alt='' src='https://www.travelplusstyle.com/wp-content/gallery/cache/34964__940x_str4315gr-195103-overwater-villa-with-pool-deck-high.jpg' />
              <div className='featured-title'>
                  <h2>Soneva Jani, Maldives</h2>
                  <h3>200 Properties</h3>
              </div>
          </div>
          <div className='featured-item'>
              <img className='featured-img' alt='' src='https://www.travelplusstyle.com/wp-content/gallery/cache/35109__940x_ritzparis-2016-lw0608_75329918_suite_coco_chanel_1.jpg' />
              <div className='featured-title'>
                  <h2>Ritz Paris, France</h2>
                  <h3>129 Properties</h3>
              </div>
          </div>
    </div>
  )
}

export default Featured