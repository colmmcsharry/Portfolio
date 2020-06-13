import React from 'react';
import ReactDOM from 'react'
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import Scroller from './Scroller.js'
import networkerspic from './networkerspic.jpg'
import networkerspic2 from './networkerspic2.jpg'
import networkerspic3 from './networkerspic3.jpg'
import networkershot from './networkersshot.jpg'
import cb1 from './cb1.jpg'
import cb2 from './cb2.jpg'
import cb3 from './cb3.jpg'
import cb4 from './cb4.jpg'







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

                   <div id="scroller3"> <ScrollLink activeClass="active" to="Project2" spy={true} offset={-20} smooth={true} duration={900} ><Scroller /></ScrollLink> </div> 

              </div>

                <h3 className="projectname cabins"><Element name="Project2" ></Element><a href="https://mcshazz.github.io/Testproj/" target="_blank"> Cosy Cabins</a></h3>
              <div className="project" id="second">
                  
                  <div className="description column"> 
                   This is a mock-up website for my brother's company.
                     <br/><br/> Built using React, I tried to convey 
                    the overall ethos of the company with the website design.

                    <br/><br/>
                    Eventually, I will add a booking / payment system to the site.
                  
                  </div>
                  <div className="image-container column">
                  <a href="https://mcshazz.github.io/Testproj/" target="_blank">
                  this is the image container/column
                  <br/>this is the image container/column
                  <br/>this is the image container/column
                  <br/>this is the image container/column
                  <br/>this is the image container/column
                      <div className="laptop">
                      <img src={cb1} />
                      <img src={cb2} />
                      <img src={cb3} />
                      <img src={cb4} />      
                      </div>
                      </a>
                  </div>
                  <div id="scroller4"> <ScrollLink activeClass="active" to="Project3" offset={-20} spy={true} smooth={true} duration={900} ><Scroller /></ScrollLink> </div> 
              </div>
               <h3 className="projectname cabins"><Element name="Project3" ></Element> Project 3</h3> 
              <div className="project" id="third">
                  
                  <div className="description column"> 
                   
                    Under Construction

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
                  <div id="scroller5"> <ScrollLink activeClass="active" className="test1" to="top" spy={true} smooth={true} duration={500} >^</ScrollLink> </div> 
              </div>


</React.Fragment>


	)

}