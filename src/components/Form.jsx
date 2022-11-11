import React from "react";
import "./form.css";
import './img.css';
import memesData from "./memes.Data";


export default function Form(props){

    
    
return(
    <div className="holder">
    <div className="form-div">
        <div className="form-txt">
        <input name="topText" placeholder="Top text"  
        className="input"type="text" id="topText" 
        value={props.meme.topText}
        onChange={props.handleChange}  />

        <input name="bottomText" placeholder="Bottom text" className="input"
        type="text" id="bottomText" 
        onChange={props.handleChange} value={props.meme.bottomText}/>
        
        </div>
        <div className="form-button">
        <button onClick={props.handleClick}className="button-sub" type="submit" >{`Get a new meme image `} 🖼</button>
        </div>
        
        </div>
        <div className="Image-div">
        <div className="Image-container">
        <span className="firstText">{props.meme.topText}</span>
        <span className="secondText">{props.meme.bottomText}</span>
        <img className="Imagemain"src={props.meme.randomImage} alt="" />
        </div>
    </div>


       </div> 

)


}