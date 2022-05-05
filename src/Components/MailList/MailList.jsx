import React from 'react'
import './mail-list.css'

const MailList = () => {
    return (
        <div className='mail-container'>
            <div className='mail-box'>
                <h2> Save time, save money!</h2>
                <span>Sign up and we'll send the best deals to you</span>
                <div className='form-control'>
                    <input type='text' placeholder='Your email' />
                    <button>Suscribe</button>
                </div>
            </div>
        </div>
    )
}

export default MailList