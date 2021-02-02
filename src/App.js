import React from 'react';
import './App.scss';
import { HashRouter, Route } from "react-router-dom";
import Bio from './components/Bio.js'
import Projects from './components/Projects.js'
import Landingview from './components/Landingview.js'
import Newdiv from './components/Newdiv.js'






function App() {
  return (
    <HashRouter basename='/'>

    <div className="App">
            
 
<Landingview />            
              


        <div id="wrapper">
        <div id="scroll-magic-point"></div>
          <Bio />
          <Projects />

                    


                  

                               
       

          
        </div>

  </div>

  </HashRouter>
  );


}

export default App;
