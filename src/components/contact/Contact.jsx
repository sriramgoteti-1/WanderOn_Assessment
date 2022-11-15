import React from 'react'
import "../contact/contact.css"
export default function Contact() {
  return (
    <div className='contact'>
        <h2 className='contactTitle'>Contact US</h2>
        <form className='contactForm'>
        <label for="fname"></label>
            <input className="contactInfo" type="text" id="name" name="name" placeholder="Your name.."/>
        
            <label for="people"></label>
            <input className="contactInfo" type="text"id="people"   placeholder="email"/>

            <label for="people"></label>
            <input className="contactInfo" type="number"id="people"   placeholder="Send a Message"/>
            <input type="submit" value="Submit" id="submit" />

        </form>
    </div>
  )
}
