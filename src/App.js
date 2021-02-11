import React, { Suspense } from 'react';
import './App.scss';
import { HashRouter } from "react-router-dom";
import Bio from './components/Bio.js'
import Projects from './components/Projects.js'
import Landingview from './components/Landingview.js'
import Contact from './components/Contact.js'


const Gallery = React.lazy(() => import('./components/Gallery.js'));







function App() {
  return (
    <HashRouter basename='/'>

    <div className="App">
            
 
<Landingview />            
              


        <div id="wrapper">
        <div id="scroll-magic-point"></div>
       
          <Bio />

           
    
          
          <Projects />


                    


                  

                               
       

          <Contact />
          <Suspense fallback={<div>Loading...</div>}>
        <Gallery />
        </Suspense>
        </div>

  </div>

  </HashRouter>
  );


}

export default App;
