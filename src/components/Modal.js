import React, { useState,useEffect }  from 'react';




export default function Modal (props){


var [mystring, setString] = useState('temp');

/*there has to be a slight delay on loading, otherwise it interferes with the intersectiom observer*/
window.onload = setTimeout(function() {

// const btn = document.getElementById("myBtn");
const modal = document.getElementsByClassName("modal");


// var vari = document.querySelectorAll('.vari');

const storyh2 = document.querySelectorAll('h2')[0];

storyh2.style.fontFamily="Dancing Script";
storyh2.style.fontSize="3.5rem";



// txtimgs.addEventListener('click', function(event){
//   txtimgs.classList.toggle('testclass')
// })



// var selroy = document.getElementById('roy');
// selroy.onclick = function goblue(){
//   selroy.classList.toggle('testclass')
// }


var txtimgs = document.querySelectorAll('figure') ;


for ( let i=0; i < txtimgs.length ; i++){

txtimgs[i].onclick = function(){
txtimgs[i].classList.toggle('testclass');

txtimgs[i].onmouseout = function(){txtimgs[i].classList.remove('testclass')}
}





}









/*JS Media query starts*/
function myFunction(x) {
  if (x.matches) {
    setString(' hover');
   // If media query matches
  } else {   
    setString(' click')
  }
}
var x = window.matchMedia("(min-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

/*js media query ends*/



/*have to hover for half a second til it opens*/
let timeOut;



// document.querySelectorAll('.some-class').forEach(item => {
//   item.addEventListener('click', event => {
//     //handle click
//   })
// })



 document.getElementById('My Story').addEventListener('mouseover', (e) => {
  timeOut = setTimeout(() => {
    openup(0)
  }, 800);
});

 document.getElementById('Crezo Construction').addEventListener('mouseover', (e) => {
  timeOut = setTimeout(() => {
    openup(1)
  }, 500);
});


 document.getElementById('Cosy Cabins').addEventListener('mouseover', (e) => {
  timeOut = setTimeout(() => {
    openup(2)
  }, 500);
});

 document.getElementById('NetWorkers').addEventListener('mouseover', (e) => {
  timeOut = setTimeout(() => {
    openup(3)
  }, 500);
});




// vari.addEventListener('mouseout', (e) => {
//   clearTimeout(timeOut);
// });
/*hover timer ends when you mouseout*/


// /*the default behavior*/
// vari.onmousedown = openup;  
  function openup(mynum){
  modal[mynum].style.display = "block";

  function close(xnum){
    modal[mynum].style.display ="none"
  }


document.getElementsByClassName('close')[mynum].onclick = function(){
  modal[mynum].style.display = "none"
}

document.getElementsByClassName('hoverclick')[mynum].addEventListener('mouseout', (e) => {
  clearTimeout(timeOut);
});




/*closespan2.onclick = function(mynum) {
  modal[mynum].style.display = "none"};  */

/*if you click anywhere on the dimmed part, it closes*/
 window.onclick = function(event) {
  if (event.target === modal[mynum]) {
    modal[mynum].style.display = "none";}
}

}



} , .1000   ) 






	return (

		<React.Fragment >

<span data-aos="fade-down"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-once="true" className="hoverclick" id={props.title}> {mystring}</span>

<div id="myModal" className="modal">


  <div className="modal-content">

    <span id={props.xnumber} className="close">&times; </span>

 <h2 className="modaltitle"> {props.title} </h2>

    <div className="modal-grid-container">

    
      <div className="column">
    
      {props.column1}

      </div>
      <div className="column">
     {props.column2}

     </div>
   
   </div>

{/*  <span id={props.xbot} id="bottom" className="close" >&times;</span>*/}
  </div>

</div>

</React.Fragment>




		)
}