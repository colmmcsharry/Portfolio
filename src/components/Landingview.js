import React from 'react';
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import meface from '../pics/meface.jpg'


export default function Landingview() {




return (

<React.Fragment>  
<Element name="top" />  


<input id="toggle1" type="checkbox" className="mything"/>
<label for="toggle1"></label>

{/*hi and peekaboo are the same headings, just dif colors. one fades away after clicking moon*/}

<h1 className="hi" id="lol">
    Hi, I'm Colm 
</h1> 

<h1 className="peekaboo">
    Hi, I'm Colm
</h1> 


{/*this is the main view of Vancouver, both in day and night*/}
<div className="window dark bright"> 
     
</div>  

{/*there are two scroll link*/}
<ScrollLink activeClass="active" to="About" spy={true} offset={-20} smooth={true} duration={900}>
<div id="scroller1">
 <ScrollLink activeClass="active" to="About" spy={true} offset={-20} smooth={true} duration={900}>
 <div className="arrow">Click Me</div></ScrollLink>
  </div></ScrollLink>
</React.Fragment>

)
}

