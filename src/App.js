import React from 'react';
import './App.scss';
import ButtonClick from './ButtonClick.js'
import networkerspic from './networkerspic.png'
import networkerspic2 from './networkerspic2.png'
import networkerspic3 from './networkerspic3.png'
import networkershot from './networkersshot.png'
import Scroller from './Scroller.js'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import stick from './stick.JPG'
import dog from './dog.JPG'
import { HashRouter, Route, Link } from "react-router-dom";


function App() {
  return (
    <HashRouter basename='/'>

    <div className="App">
      
  <input id="toggle1" type="checkbox"/>
  <label for="toggle1"></label>

    
      <div id='window'>    
      
                <h1 id="hi1">Hi, I'm Colm </h1>               
                {<h1 id="hi2">Hi, I'm Colm </h1> }  
                 
      <Scroller /> 
</div>
<div id="wrapper">

<div id="bio">
<img id="profiler" src={dog}/>
<p id="blurb">Here is where I describe myself and everything I do blah blah <br/><br/>
I'm awesome I use React and Github</p>

</div>

      
<div className="project" id="first">
    <div className="image-container">
        <img src={networkerspic} />
        <img src={networkerspic2} />
        <img src={networkerspic3} />
        <img src={networkershot} />        
    </div>
</div>




</div>

  </div>

  </HashRouter>
  );


}

export default App;
