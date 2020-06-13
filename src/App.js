import React from 'react';
import './App.scss';
import Scroller from './Scroller.js'
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import dog from './dog.JPG'
import { HashRouter, Route, Link } from "react-router-dom";
import day from './day.jpg'
import Bio from './Bio.js'
import Projects from './Projects.js'
import Landingview from './Landingview.js'





function App() {
  return (
    <HashRouter basename='/'>

    <div className="App">
            
 
<Landingview />            
              


        <div id="wrapper">
          <Bio />
          <Projects />

                    


                  

                               

        </div>

  </div>

  </HashRouter>
  );


}

export default App;
