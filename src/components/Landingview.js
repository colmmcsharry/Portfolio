import React from 'react';
import { Link as ScrollLink, Element } from "react-scroll";
import flaresun from '../pics/flaresun.png'
import Dropdown from './Dropdown'


export default function Landingview() {


console.log( '%c👋 Hello from the other side', 'font-size: 2em; color: blue; font-style:italic' );

return (



<React.Fragment>  
<Element name="top" style={{backgroundImage: `url(${flaresun})`, visibility:'hidden'}} />  

<input id="toggle1" type="checkbox" className="mything"/>
<label htmlFor="toggle1"></label>


<h1 className="hi">
  Hi, I'm Colm <br/>
</h1> 

<h1 className="peekaboo">
    Hi, I'm Colm
</h1> 



{/*this is the main image, both in day and night*/}
<div className="window dark bright">      
</div>  

{/*burger goes here*/}
<Dropdown />

{/*there are two scroll link*/}
<ScrollLink activeClass="active" to="About" spy={true} offset={-2} smooth={true} duration={900}>
<div id="scroller1">
 <ScrollLink activeClass="active" to="About" spy={true} offset={-2} smooth={true} duration={900}>
 <div className="arrow" id="firstarrow"></div></ScrollLink>
  </div></ScrollLink>

</React.Fragment>

)
}

