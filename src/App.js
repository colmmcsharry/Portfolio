import React from 'react';
import './App.scss';
import Scroller from './Scroller.js'
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import dog from './dog.JPG'
import { HashRouter, Route, Link } from "react-router-dom";
import day from './day.jpg'
import Bio from './Bio.js'
import Projects from './Projects.js'






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
              

              <div id="scroller1"> <ScrollLink activeClass="active" to="About" spy={true} smooth={true} duration={900} ><Scroller /></ScrollLink> </div>         
                         
              
        </div>


        <div id="wrapper">
          <Bio />
          <Projects />

                    


                  

                               

        </div>

  </div>

  </HashRouter>
  );


}

export default App;
