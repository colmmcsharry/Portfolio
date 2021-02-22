import React from 'react';
import { Link as ScrollLink, Element } from "react-scroll";
import flaresun from '../pics/flaresun.png'



export default function Landingview() {

console.log( '%c👋 Hello from the other side', 'font-size: 2em; color: blue; font-style:italic' );

return (

<React.Fragment>  
<Element name="top" style={{backgroundImage: `url(${flaresun})`, visibility:'hidden'}} />  

<input id="toggle1" type="checkbox" className="mything"/>
<label htmlFor="toggle1"></label>

<div id="iconlistcontainer2">
<h3><span style={{fontFamily:'Times New Roman'}}>&lt;</span> I make websites <span style={{fontFamily:'Times New Roman'}}> &gt;</span></h3>
</div>

{/*hi and peekaboo are the same headings, just dif colors. one fades away after clicking moon*/}

<h1 className="hi">
    Hi, I'm Colm 
</h1> 

<h1 className="peekaboo">
    Hi, I'm Colm
</h1> 


{/*this is the main image, both in day and night*/}
<div className="window dark bright"> 
     
</div>  

{/*there are two scroll link*/}
<ScrollLink activeClass="active" to="About" spy={true} offset={-2} smooth={true} duration={900}>
<div id="scroller1">
 <ScrollLink activeClass="active" to="About" spy={true} offset={-2} smooth={true} duration={900}>
 <div className="arrow" id="firstarrow"></div></ScrollLink>
  </div></ScrollLink>

</React.Fragment>

)
}

