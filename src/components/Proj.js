import React from 'react';
import ReactDOM from 'react'
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import responsive from '../pics/responsive.png'



export default function Proj(props){



return (


	<div id="projwrap">

  
 <a className="projlink" href={props.link} target="_blank"><h3 className="projtitle">{props.title}</h3></a>

  <div id="gridwrapper">

    <div id="left">

{props.description}

    </div>

    <div id="right">
    <a href={props.link} target="_blank"> 
  

     
{/*inner is the screen inside the laptop. */}
      <div className="innerwrapper">
  <img className="inner" src={props.image1}/>
  <img className="inner" src={props.image2}/>
  <img className="inner" src={props.image3}/>
  <img className="inner" src={props.image4}/>       
      </div>   

 <div className="ipadwrapper">      
      <img className="ipad"  src={props.image1}/>
      <img className="ipad" src={props.image2}/>
      <img className="ipad" src={props.image3}/>   
     <img className="ipad" 	src={props.image4}/>    
      </div>          
   
 <div className="phonewrapper">     
 <img className="phone" src={props.image1}/>
          <img className="phone" src={props.image2}/>
      <img className="phone" src={props.image3}/>   
     <img className="phone" src={props.image4}/>   
      </div>
      
      {/*this is the png of all the devices*/}
  <img className="devices" src={responsive} />   
 
</a>
   
      
    
     
    
    </div>

  </div>  



</div>  




)


}




	