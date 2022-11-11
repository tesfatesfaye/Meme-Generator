import React from "react";
import './nav.css'
export default function Nav(){
    return(
        <div className="nav-holder">
        <nav className="nav">
        <div className="nav-elementsOne">
            <img className='troll' src='/images/trollface.png'/>
            <h1 className="text">Meme Generator</h1>
            </div> 
        <div className="nav-elementsTwo">
        <h2 className="smallertext">Meme Generator</h2>
        </div>
        </nav>
        </div>
    )
}
