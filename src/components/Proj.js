import React from 'react';
import ReactDOM from 'react'
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import responsive from '../pics/responsive.png'
import {alldescriptions} from './text.js'
import Modal from './Modal.js'
import LazyLoad from 'react-lazyload';




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

<LazyLoad height={400} width={400} offset={300}>    

      <div className="innerwrapper">   
  <img className="inner" src={props.image1}  alt="laptoppic" />
  <img className="inner" src={props.image2} alt="laptoppic" />
  <img className="inner" src={props.image3} alt="laptoppic" />
  <img className="inner" src={props.image4} alt="laptoppic" />  

      </div>   

 <div className="ipadwrapper">      
      <img className="ipad"  src={props.image1} alt="tabletpic"  />
      <img className="ipad" src={props.image2} alt="tabletpic" />
      <img className="ipad" src={props.image3} alt="tabletpic" />   
     <img className="ipad" 	src={props.image4} alt="tabletpic" />    
      </div>          
 
 <div className="phonewrapper">     
 <img className="phone" src={props.image1} alt="phonepic"               />
          <img className="phone" src={props.image2} alt="phonepic"      />
      <img className="phone" src={props.image3} alt="phonepic"          />   
     <img className="phone" src={props.image4} alt="phonepic"           />   
      </div>
      
      {/*this is the png of all the devices*/}
  <img className="devices" src={responsive} alt="devicespic" />   
</LazyLoad> 
</a>
   
      
    
     
    
    </div>

  </div>  



</div>  




)


}




	