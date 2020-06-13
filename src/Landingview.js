import React from 'react';
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import Scroller from './Scroller.js';


export default function Landingview() {




return (

<React.Fragment>  
<Element name="top" />      
           <input id="toggle1" type="checkbox" />
<label for="toggle1"></label>

{/*hi and peekaboo are the same headings, just dif colors. one fades away after clicking moon*/}
<h1 className="hi">
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
 <Scroller /></ScrollLink>
  </div></ScrollLink>
</React.Fragment>

)
}

