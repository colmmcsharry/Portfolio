import React from 'react';
import ReactDOM from 'react'
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import dog from './dog.JPG'
import mefire from './mefire2.JPG'
import Scroller from './Scroller.js'

export default function Bio(){



  window.onload = setTimeout(function() {
    document.getElementsByTagName('label')[0].style.display = 'block';
      
} , 3000   )


  window.onload = setTimeout(function() {
      document.getElementsByTagName('label')[0].style.visibility = 'visible';

},  3800   )


window.onload = setTimeout(function() {  
  document.getElementById("scroller1").style.visibility = "visible";
  
  document.getElementById("scroller1").style.animation = "scale-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";

  // document.getElementById("scroller1").className += " revealdown";
},  4800   )



return (

	<React.Fragment>

            <h3 id="about"><Element name="About" ></Element>About</h3>
              <div id="bio">
                
                   <div className="item">
                      <div className="polaroid"><img src={mefire}/>
                        <div className="caption">Me social distancing</div>
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
    <td><a href="https://docdro.id/ZNxICaa" target="_blank"> Polyglot Bootcamp</a></td>
    <td>HTML/CSS/Javascript</td>
  </tr>
  <tr>
    <td><a href="https://www.theodinproject.com/" target="_blank">The Odin Project</a></td>
    <td>React.js</td>
  </tr>
  <tr>
    <td><a href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/" target="_blank">The Complete Web Dev in 2020</a></td>
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
                {/*if I change id to className, then I can just change all the scoller's bottom positions om mob */}
                 <div id="scroller2"> <ScrollLink activeClass="active" offset={-29} to="Myprojects" spy={true} smooth={true} duration={900} ><Scroller /></ScrollLink> </div> 


              </div>


</React.Fragment>

)	
}
