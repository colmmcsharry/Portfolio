import React from 'react';
import './App.scss';
import ButtonClick from './ButtonClick.js'
import networkerspic from './networkerspic.jpg'
import networkerspic2 from './networkerspic2.jpg'
import networkerspic3 from './networkerspic3.jpg'
import networkershot from './networkersshot.jpg'
import Scroller from './Scroller.js'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import stick from './stick.JPG'
import dog from './dog.JPG'
import { HashRouter, Route, Link } from "react-router-dom";
import day from './panb-min.jpg'
import laptop from './laptop.png'





function App() {
  return (
    <HashRouter basename='/'>

    <div className="App">
            
          <input id="toggle1" type="checkbox"/>
          <label for="toggle1"></label>

        <div className="preload">
        <img src={day}/>
        </div>

        <h1 id="hi1" className="fade">Hi, I'm Colm </h1>               
                        <h1 id="hi2">Hi, I'm Colm </h1>   
            
              <div id='window'>    
              
                        
                         
              <Scroller /> 
        </div>


        <div id="wrapper">

              <div id="bio">

                   <div className="item">
                      <div className="polaroid"><img src={dog}/>
                        <div className="caption">Myself and a friend</div>
                      </div>
                    </div>

                  <p id="blurb">Here is where I describe myself and everything I do blah blah <br/><br/>
                  I'm awesome I use React and Github</p>

              </div>

                    <h2>My Projects</h2>


                  <h3> NetWorkers</h3>
              

              <div className="project" id="first">
                  
                  <div className="description column"> 
                  this is the project container/column
                  <br/>this is the project container/column where I talk about stuff like
                  <br/>this is the project container/column how the priject was made

                  <br/><br/>this is the project container/column what it does etc
                  <br/>this is the project container/column and other stuff

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
                  
              </div>

              <div className="project" id="second">
                  
                  <div className="description column"> 
                  this is the project container/column
                  <br/>this is the project container/column where I talk about stuff like
                  <br/>this is the project container/column how the priject was made

                  <br/><br/>this is the project container/column what it does etc
                  <br/>this is the project container/column and other stuff

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
                  
              </div>

              <div className="project" id="third">
                  
                  <div className="description column"> 
                  this is the project container/column
                  <br/>this is the project container/column where I talk about stuff like
                  <br/>this is the project container/column how the priject was made

                  <br/><br/>this is the project container/column what it does etc
                  <br/>this is the project container/column and other stuff

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
                  
              </div>

                               

        </div>

  </div>

  </HashRouter>
  );


}

export default App;
