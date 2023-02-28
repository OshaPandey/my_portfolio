import React from 'react';
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
        <div className="header_container">
            <div className="left_container">
                <div className="top_container">
                    <div className="top_text">
                        Hello, I am
                    </div>
                    <div className="middle_text">
                        Osha Pandey
                    </div>
                    <div className="bottom_text">
                        Amazing employee to be
                    </div>
                    <div className="down_text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam illum sunt alias consequatur impedit iste cum atque aliquid officiis voluptatibus incidunt voluptatem vitae eveniet enim reprehenderit dicta magni, labore odio!
                    </div>
                </div>
                <div className="middle_container">
                    <div className="button">
                        Let's Chat
                    </div>
                    
                </div>
                <div className="bottom_container">

                </div>
            </div>
            <div className="right_container"></div>
        </div>
    </div>
  )
}
