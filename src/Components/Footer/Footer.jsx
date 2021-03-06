import React from 'react'
import { ExternalLink } from 'react-external-link'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin,faTelegramPlane, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>1010 Avenue, sw 54321, chandigarh</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <FontAwesomeIcon icon={faPhoneAlt} className='icon' />
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>9876543210 0</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <FontAwesomeIcon icon={faEnvelopeCircleCheck} className='icon' />
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>mail@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <ExternalLink href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" /></ExternalLink>
                                </div>
                                <div className="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                        elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <ExternalLink href='#'><FontAwesomeIcon icon={faFacebookSquare} className="icon" /></ExternalLink>
                                    <ExternalLink href='#'><FontAwesomeIcon icon={faTwitterSquare} className="icon" /></ExternalLink>
                                    <ExternalLink href='#'><FontAwesomeIcon icon={faLinkedin} className="icon" /></ExternalLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><ExternalLink href='#' className="link-item">Home</ExternalLink></li>
                                    <li><ExternalLink href='#' className="link-item">about</ExternalLink></li>
                                    <li><ExternalLink href='#' className="link-item">services</ExternalLink></li>
                                    <li><ExternalLink href='#' className="link-item">portfolio</ExternalLink></li>
                                    <li><ExternalLink href='#' className="link-item">Contact</ExternalLink></li>
                                    <li><ExternalLink href='#' className="link-item">About us</ExternalLink></li>
                                    <li><ExternalLink href='#' className="link-item">Our Services</ExternalLink></li>
                                    <li><ExternalLink href='#' className="link-item">Expert Team</ExternalLink></li>
                                    <li><ExternalLink href='#' className="link-item">Contact us</ExternalLink></li>
                                    <li><ExternalLink href='#' className="link-item">Latest News</ExternalLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don???t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Email Address" />
                                        <button><FontAwesomeIcon icon={faTelegramPlane} /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2018, All Right Reserved <ExternalLink href="https://codepen.io/anupkumar92/">Anup</ExternalLink></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className="footer-menu">
                                <ul>
                                    <li><ExternalLink className="link-item" href='#'>Home</ExternalLink></li>
                                    <li><ExternalLink className="link-item" href='#'>Terms</ExternalLink></li>
                                    <li><ExternalLink className="link-item" href='#'>Privacy</ExternalLink></li>
                                    <li><ExternalLink className="link-item" href='#'>Policy</ExternalLink></li>
                                    <li><ExternalLink className="link-item" href='#'>Contact</ExternalLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer