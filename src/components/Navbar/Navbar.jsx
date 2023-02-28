import React from 'react';
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar_container">
            <div className="left_container">
                LOGO
            </div>
            <div className="right_container">
                <div className="nav_items">
                    About me
                </div>
                <div className="nav_items">
                    Projects
                </div>
                <div className="nav_items">
                    Resume
                </div>
            </div>
        </div>
    </div>
  )
}
