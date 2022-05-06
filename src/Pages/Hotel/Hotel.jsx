import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Header } from "../../Components/Header/Header"
import MailList from "../../Components/MailList/MailList"
import Footer from "../../Components/Footer/Footer"
import './hotel.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faHeartCircleBolt, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { ExternalLink } from 'react-external-link'

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/261708749.jpg?k=2fc21484aab9670a4fd0cf141d778e0da91b632419fbd061ac7d727b089012d0&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/261709125.jpg?k=4ed6015ee8a715a991987838137ff96f14a0ec8a4e98bf47cb054736f8e91ce6&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/261708856.jpg?k=494b05bfd3252df7b630df888c42423975812488f8bf9cb8b91d5c9b821e3263&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/261707746.jpg?k=ef7d398322a2286e72ec0afd569007677d95adecad281f3378a53ea66d502313&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/261708687.jpg?k=fa6f54ce30aecdd2757ba9f8b960fcc3751c47f0cd36603c9bab615dda596e23&o=&hp=1"
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  };

  const handleArrow = (direction) => {
    let newSlideNo;
    if (direction === "l") {
      newSlideNo = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNo = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNo)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='hotel-container'>
        {open && <div className='slider'>
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleArrow("l")}/>
          <img src={ photos[slideNumber].src } alt='' className='slider-img' />
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleArrow("r")}/>
        </div>}
        <div className='hotel-wrapper'>
          <ExternalLink className='button' href='#' >Reserve or Book Now! </ExternalLink>
          <h1>Grand Hotel</h1>
          <div className='hotel-address'>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className='hotel-distance'>Excellent Location - 500m from center</span>
          <span className='hotel-price'> Book a stay over KES 30,551 at this property </span>
          <div className='hotel-images'>
            {photos.map((photo,i) => (
              <div className='hotel-img-wrapper'>
                <img src={photo.src} alt="" className='hotel-img' onClick={()=>handleOpen(i)} />
              </div>
            ))}
          </div>
          <div className='hotel-details'>
            <div className='hotel-d-desc'>
              <h1>Stay in the heart of Kraków</h1>
              <p>
                Situated in Kraków, Tower Street Apartments features city views and free WiFi,
                400 m from St. Florian's Gate and 600 m from Cloth Hall.

                Every unit has a private bathroom and shower, air conditioning, a flat-screen TV
                and a microwave. There is also a kitchenette in some of the units equipped with a dishwasher, an oven, and a stovetop.

                Popular points of interest near the apartment include Main Market Square,
                Town Hall Tower and St. Mary's Basilica. The nearest airport is John Paul II International Kraków–Balice,
                16 km from Tower Street Apartments, and the property offers a paid airport shuttle service.

                This is our guests' favourite part of Kraków, according to independent reviews.

                Couples particularly like the location — they rated it 9.8 for a two-person trip.
              </p>
            </div>
            <div className='hotel-d-price'>
              <h1> Perfect for a 9-night stay! </h1>
              <span>
                <FontAwesomeIcon className='icon' icon={faHeartCircleBolt} />
                <p>Situated in the real heart of Kraków, this property has an excellent location score of 9.8</p>
              </span>
              <h2>  <b>$945</b> (9 nights) </h2>
              < ExternalLink href='#'> <button>Reserve or Book Now!</button></ExternalLink> 
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  )
}

export default Hotel
