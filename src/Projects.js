import React from 'react';
import ReactDOM from 'react'
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import Scroller from './Scroller.js'
import networkerspic from './networkerspic.jpg'
import networkerspic2 from './networkerspic2.jpg'
import networkerspic3 from './networkerspic3.jpg'
import networkershot from './networkersshot.jpg'








export default function Projects(){


return (
<React.Fragment>


<h3 className="projectname"><Element name="Myprojects" ></Element><span id="myprojects">My Projects</span>  <br/><br/><a href="https://mcshazz.github.io/NetWorkers/" target="_blank"> NetWorkers</a></h3>
              

              <div className="project" id="first"> 
                  
                  <div className="description column"> 
                  
                  Networkers is a site I created from scratch to help me learn React.<br/>
                  <br/>It's almost like Tinder, except instead of swiping through dates
                  you swipe through workers in your area. <br/>
                  <br/>

                  So, if you need a pipe fixed or as website designed, <br/> you can swipe through the local plumbers or designers, and hire one you like!
                  

                  </div>

                  <div className="image-container column">
                  <a href="https://mcshazz.github.io/NetWorkers/" target="_blank">
                  this is the image container/column
                  <br/>this is the image container/column
                  <br/>this is the image container/column
                  <br/>this is the image container/column
                  <br/>this is the image container/column
                      <div className="laptop">
                      <img src={networkerspic} />
                      <img src={networkerspic2} />
                      <img src={networkerspic3} />
                      <img src={networkershot} />   

                      </div>
                      </a>
                  </div>

                   <div id="scroller3"> <ScrollLink activeClass="active" to="Project2" spy={true} smooth={true} duration={900} ><Scroller /></ScrollLink> </div> 

              </div>

                <h3 className="projectname cabins"><Element name="Project2" ></Element> Project 2</h3>
              <div className="project" id="second">
                  
                  <div className="description column"> 
                  Networkers is a site I created from scratch to help me learn React.<br/>
                  <br/>It's almost like Tinder, except instead of swiping through dates
                  you swipe through workers in your area. <br/>
                  <br/>

                  So, if you need a pipe fixed or as website designed, <br/> you can swipe through the local plumbers or designers, and hire one you like!
                  
                  </div>
                  <div className="image-container column">
                  
                  this is the image container/column
                  <br/>this is the image container/column
                  <br/>this is the image container/column
                  <br/>this is the image container/column
                  <br/>this is the image container/column
                      <div className="laptop">
                      <img src={networkerspic} />
                      <img src={networkerspic2} />
                      <img src={networkerspic3} />
                      <img src={networkershot} />      
                      </div>
                  </div>
                  <div id="scroller4"> <ScrollLink activeClass="active" to="Project3" spy={true} smooth={true} duration={900} ><Scroller /></ScrollLink> </div> 
              </div>
               <h3 className="projectname cabins"><Element name="Project3" ></Element> Project 3</h3> 
              <div className="project" id="third">
                  
                  <div className="description column"> 
                  Networkers is a site I created from scratch to help me learn React.<br/>
                  <br/>It's almost like Tinder, except instead of swiping through dates
                  you swipe through workers in your area.  <br/>
                  <br/>

                  So, if you need a pipe fixed or as website designed, <br/> you can swipe through the local plumbers or designers, and hire one you like!
                 
                  </div>
                  <div className="image-container column">
                  
                  this is the image container/column
                  <br/>this is the image container/column
                  <br/>this is the image container/column
                  <br/>this is the image container/column
                  <br/>this is the image container/column
                      <div className="laptop">
                      <img src={networkerspic} />
                      <img src={networkerspic2} />
                      <img src={networkerspic3} />
                      <img src={networkershot} />      
                      </div>
                  </div>
                  <div id="scroller5"> <ScrollLink activeClass="active" className="test1" to="About" spy={true} smooth={true} duration={500} >^</ScrollLink> </div> 
              </div>


</React.Fragment>


	)

}