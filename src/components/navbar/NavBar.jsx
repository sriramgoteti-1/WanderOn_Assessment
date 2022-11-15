import React from 'react'
import "./navbar.css"

export default function NavBar() {
  return (
    <div className="nav">
        <div className="navLeft">
            <img  className="navLeftImg"src="https://media-cdn.tripadvisor.com/media/photo-s/1c/94/77/96/wanderon-logo.jpg"/>
        </div>
        <div className="navCenter">
            <ul className="navCenterItem">
          <li className="navCenterItemList">
            Blogs 
          </li>
          <li className="navCenterItemList">
            Sales
          </li>
          <li className="navCenterItemList">
            Contact
          </li>
        </ul>
        </div>
        <div className="navRight"></div>
    </div>
  )
}
