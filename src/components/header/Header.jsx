import { useEffect } from "react"
import { useState } from "react"
import "./header.css"

export default function Header({setSearchTerm}) {
  
  return (
    <div className="header">
      <div className="headerTitles">
      <span className="headerTitlesm">
          Travel Blog
        </span>
        <input className="headerTitlelg" type="text" placeholder="Search..." 
        onChange={(event)=>{setSearchTerm(event.target.value)}}
        />
          
        
      </div>
      <img className="headerImg" 
      src="https://images.thrillophilia.com/image/upload/s--maAkexOt--/c_fill,g_center,h_642,q_auto,w_1280/f_auto,fl_strip_profile/v1/images/photos/000/013/717/original/kayaking.jpg.jpg"
      alt="" />
    </div>
  )
}