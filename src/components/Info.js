import React from 'react'
import ProfilePic from '../images/Milind.png'
import LinkedIn from '../images/linkedin-brands.svg'
import Envelope from '../images/envelope-solid.svg'


export default function Info() {
    return(
        <div>
            <div className='info--rectangle'></div>
            <img src={ProfilePic} className="info--image" />
                <label className='info--label'>Milind Contractor</label>
                <label className='info--label1'>forntend-developer</label>
                <label className='info--label2'>mcontrac.webside</label>
                <button className="info--EmailButton">
                <span>
                <img src={Envelope} className="info--envelopeButton--icon"></img></span>
                Email</button>
                <button className="info--linkedinButton">
                <span>
                <img src={LinkedIn} className="info--linkedInButton--icon"></img></span>LinkedIn</button>
        </div>
    )   
}