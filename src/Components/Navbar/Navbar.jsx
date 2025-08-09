import React, { useState } from 'react'
import './Navbar.css'
import '../Hero/Hero'
import '../Hero/Hero.css'
const Navbar = () => {
  const [action, setAction] = useState("find");
  function shareText(){
    const element = document.getElementById("share-text");
    const element2 = document.getElementById("find-text");
    element.classList.add("show");
    element2.classList.add("nshow");  
    setAction("share");
  }
  function findText(){
    const element = document.getElementById("share-text");
    const element2 = document.getElementById("find-text");
    element.classList.remove("show");
    element2.classList.remove("nshow")
    setAction("find");
  }
  
  return (
    <div className='navbar'>
        <ul className='nav-menu'>
            <li onClick={findText}className={action === "share" ? "gray" : "ngray"}>Find text</li>
            <li onClick={shareText}className={action=== "find"? "gray":"ngray"}>Share text</li>
        </ul>
    </div>
  )
}

export default Navbar