import React from 'react';
import ReactDOM from 'react'
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import dog from './dog.JPG'
import Scroller from './Scroller.js'

export default function Bio(){

return (

	<React.Fragment>

            <h3 id="about"><Element name="About" ></Element>About</h3>
              <div id="bio">

                   <div className="item">
                      <div className="polaroid"><img src={dog}/>
                        <div className="caption">Myself and a friend</div>
                      </div>
                    </div>

                  <div id="blurb"> I have been studying web development and design for the past few years.
                  <br/><br/> I strive to create beautiful, minimalist websites with an emphasis on a quality user experience.<br/> <br/> <br/>

                               <table>
                               <tbody>
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
    <tr>
    <td></td>
    <td>SASS/Grid/Flexbox</td>
  </tr>
</tbody>
</table>
                  </div>
                {/*if I change id to className, then I chan just change all the scoller's bottom positiomns om mob */}
                 <div id="scroller2"> <ScrollLink activeClass="active" offset={-29} to="Myprojects" spy={true} smooth={true} duration={900} ><Scroller /></ScrollLink> </div> 
              </div>


</React.Fragment>

)	
}
