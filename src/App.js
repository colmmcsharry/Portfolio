import React from 'react';
import './App.scss';

import Bio from './components/Bio.js'
import Projects from './components/Projects.js'
import Landingview from './components/Landingview.js'
import Contact from './components/Contact.js'
import Gallery from './components/Gallery.js'
import LazyLoad from 'react-lazyload';






function App() {
  return (
   

    <div className="App">
            
 
<Landingview />            
              


        <div id="wrapper">
        <div id="scroll-magic-point"></div>
       
          <Bio />

           
    
          
          <Projects />


                    


                  

                               
       

          <Contact />
         
<LazyLoad offset={800}>
        <Gallery /> 

</LazyLoad>

        </div>

  </div>

 
  );


}

export default App;
