import React from 'react'
import Twitter from '../images/twitter.svg'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import Git from '../images/git.svg'

export default function Footer() {
    return(
        <div>
            <div className='footer--rectangle'></div>
            <img src={Twitter} className="footer--twitter"></img>
            <img src={Facebook} className="footer--facebook"></img>
            <img src={Instagram} className="footer--instagram"></img>
            <img src={Git} className="footer--git"></img>
        </div>
    )
}