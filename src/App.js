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
            <h3 id="about">About</h3>
              <div id="bio">

                   <div className="item">
                      <div className="polaroid"><img src={dog}/>
                        <div className="caption">Myself and a friend</div>
                      </div>
                    </div>

                  <div id="blurb"> I have been studying web development and design for the past few years.
                  <br/><br/> I enjoy creating beautiful, minimalist websites with an emphasis on a quality user experience.<br/> <br/> <br/>
                               <table>
  <tr>
    <th>Courses</th>
    <th>Skills</th>
  </tr>
  <tr>
    <td><a href="">The Odin Project</a></td>
    <td>HTML/CSS/Javascript</td>
  </tr>
  <tr>
    <td><a href="">Polyglot Bootcamp</a></td>
    <td>React.js</td>
  </tr>
  <tr>
    <td><a href="">The Complete Web Dev in 2020</a></td>
    <td>Node.js</td>
  </tr>
  <tr>
    <td></td>
    <td>Photoshop, Sketch</td>
  </tr>
  <tr>
    <td></td>
    <td>SQL</td>
  </tr>
    <tr>
    <td></td>
    <td>Bootstrap</td>
  </tr>

</table>
                  </div>
              </div>


                    <h2>My Projects</h2>


                  <h3 id="projectname"> NetWorkers</h3>
              

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
