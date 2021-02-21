import React from 'react';
import './App.scss';
import { HashRouter } from "react-router-dom";
import Bio from './components/Bio.js'
import Projects from './components/Projects.js'
import Landingview from './components/Landingview.js'
import Contact from './components/Contact.js'
import Gallery from './components/Gallery.js'
import LazyLoad from 'react-lazyload';






function App() {
  return (
    <HashRouter basename='/'>

    <div className="App">
            
 
<Landingview />            
              


        <div id="wrapper">
        <div id="scroll-magic-point"></div>
       
          <Bio />

           
    
          
          <Projects />


                    


                  

                               
       
<LazyLoad offset={200}>
          <Contact />
</LazyLoad>          
<LazyLoad offset={800}>
        <Gallery /> 

</LazyLoad>

        </div>

  </div>

  </HashRouter>
  );


}

export default App;
