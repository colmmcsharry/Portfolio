import React from 'react';
import ReactDOM from 'react'
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import mework from '../pics/me-at-work.jpg'


export default function Bio(){


/*intersection obeserver is the little point whcich, when scrolled past, makes something happen*/
window.onload = setTimeout(function() {
      if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
let observer = new IntersectionObserver(entries => {
  if (entries[0].boundingClientRect.y > 0) {
    
    document.querySelector('.mything').style.display = "none"
     }
     else {
  document.querySelector('.mything').style.display = "block"; 
  }
});
  
observer.observe(document.querySelector("#scroll-magic-point"));
}
}  )


window.onload = setTimeout(function() {
    document.querySelector('label').onclick = function myfun()
    {document.getElementById('firstarrow').classList.toggle('bgclass')}
} , 3000   )



;





  window.onload = setTimeout(function() {
    document.querySelector('.window').style.setProperty('--dynamic', 'block') 
} , 3000   )


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
},  6000   )




return (

	<React.Fragment>

            <h3 id="about"><Element name="About" ></Element>About</h3>
              <div id="bio">

              <div className="tight" >
                
                   <div className="item">
                      <div className="polaroid"><img src={mework} height="100%" width="100%" loading="lazy"/>
                        <div className="caption">Me at work</div>
                      </div>
                    </div>

                  <div id="blurb"> I have been studying web development and design for the past few years.
                  <br/><br/> I strive to create beautiful websites with an emphasis on a quality user experience.<br/> <br/> <br/>

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
    <td>React.js/Gatsby.js</td>
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
                 <div id="scroller2"> <ScrollLink activeClass="active" offset={-29} to="Myprojects" spy={true} smooth={true} duration={900} ><div className="arrow" id="arrow2"></div></ScrollLink> </div> 

                 </div>
              </div>


</React.Fragment>

)	
}
