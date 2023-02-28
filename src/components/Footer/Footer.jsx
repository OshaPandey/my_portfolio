import React from 'react';
import { SiLeetcode } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import "./footer.scss";
export default function Footer() {
  return (
    <div className='footer' >
        <div className="footer__container">
            <div className="left__container">
                Socials
            </div>
            <div className="right__container">
                <div className="bottom__container">
                    <SiLeetcode className='icon' />
                    <BsLinkedin className='icon' />
                    <AiFillGithub className='icon' />
                    <SiGmail className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}
