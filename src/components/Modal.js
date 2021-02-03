import React from 'react';
import ReactDOM from 'react'
import {alldescriptions} from './text.jsx'
export default function Modal (props){

/*there has to be a slight delay on loading, otherwise it interferes with the intersectiom observer*/
window.onload = setTimeout(function() {

const btn = document.getElementById("myBtn");
const modal = document.getElementById("myModal");
const closespan = document.getElementsByClassName("close")[0];
const closespan2 = document.getElementsByClassName("close")[1];



function openup(){
	modal.style.display = "block"}




/*JS Media query starts*/
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

closespan2.onclick = function() {
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
 
  {props.intro}
    <div className="modal-grid-container">


      <div className="column">
      {props.column1}
      </div>
      <div className="column">
     {props.column2}

     </div>

   </div>
  <span id="bottom" className="close" >&times;</span>
  </div>

</div>

</React.Fragment>




		)
}