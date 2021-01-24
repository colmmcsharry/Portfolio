import React from 'react';
import ReactDOM from 'react'
import {alldescriptions} from './text.jsx'
export default function Modal (props){

/*there has to be a slight delay on loading, otherwise it interferes with the intersectiom observer*/
window.onload = setTimeout(function() {

const btn = document.getElementById("myBtn");
const modal = document.getElementById("myModal");
const closespan = document.getElementsByClassName("close")[0];



function openup(){
	modal.style.display = "block"}





function myFunction(x) {
  if (x.matches) { // If media query matches
    btn.innerHTML = " hover";
    // btn.onmouseover = openup
  } else {
    btn.innerHTML = " click";
  }
}
var x = window.matchMedia("(min-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

/*js media query ends*/



/*have to hover for half a second til it opens*/
let timeOut;
 btn.addEventListener('mouseover', (e) => {
  timeOut = setTimeout(() => {
    openup()
  }, 500);
});


btn.addEventListener('mouseout', (e) => {
  clearTimeout(timeOut);
});
/*hover timer ends when you mouseout*/



















/*the default behavior*/
btn.onmousedown = openup;  
  

/*click the x to close*/
closespan.onclick = function() {
  modal.style.display = "none"};

/*if you click anywhere on the dimmed part, it closes*/
 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";}
}


}


 , .1000   ) 






	return (

		<React.Fragment >

<span id="myBtn"> Click Here</span>

{/*this is the background dimmed*/}
<div id="myModal" className="modal">

 
  <div className="modal-content">

    <span className="close">&times;</span>
 <h2 className="modaltitle"> {props.title} </h2>

    <div className="modal-grid-container">
    <p className="column">
    {props.text}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident voluptatum nesciunt, eius maxi
    me unde harum necessitatibus molestias dolore cum quisquam asperiores, quis at eaque quas est, vel 
     cumque?
    Some text in the Modal.. this will be a link/prop to a text file, the sentence might get really huge, who knows
    lorem20
    </p>
    <p className="column">
    lorem20Ullamco nisi dolore veniam consectetur non quis magna proident nulla id. Officia dolor fugiat la
    boris ullamco officia velit ut nulla fugiat qui cillum incididunt ut ad consequat duis
     dolor exercitation adipisicing anim sed.
     me unde harum necessitatibus molestias dolore cum quisquam asperiores, quis at eaque quas est, vel 
     cumque?
    Some text in the Modal.. this will be a link/prop to a text file, the sentence might get really huge, who knows
    lorem20
    me unde harum necessitatibus molestias dolore cum quisquam asperiores, quis at eaque quas est, vel 
     cumque?
    Some text in the Modal.. this will be a link/prop to a text file, the sentence might get really huge, who knows
    lorem20
    me unde harum necessitatibus molestias dolore cum quisquam asperiores, quis at eaque quas est, vel 
     cumque?
    Some text in the Modal.. this will be a link/prop to a text file, the sentence might get really huge, who knows
    lorem20

   ujnouhiubkj
   </p>
   </div>

  </div>

</div>

</React.Fragment>




		)
}