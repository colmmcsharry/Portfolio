import React,{useState,useEffect} from "react"
import dougal2 from '../pics/dougal2.jpg'
import Ted from '../pics/Ted.jpg'
import tea from '../pics/tea.png'
import racist from '../pics/racist.jpg'



function Father(){


window.onload = setTimeout(function() {
	const cup = document.getElementById('cuppa');
	const myspn = document.getElementById('myspan'); 
	// cup.classList.add('updown');
	cup.onclick = function(){
	cup.classList.toggle('tip');
	
	}
    } , 1000  )



const Tedarray = [

{quote: "Well, Ted, like I said the last time: 'it won't happen again'.",
author: "Father Dougal"	,
 img: dougal2 },

 {quote: "So there he is. Risen from the dead. Like that fella... E.T.",
 author: "Father Ted",	
 img: Ted
 }, 

{quote: " These are small, but those are far away... Small... Far away.",
author: "Father Ted"	,
 img: Ted
 },

 {quote:"Sorry Ted, I was concentrating too hard on looking holy.",
 author:"Father Dougal",
 img:dougal2},

 {quote:"I hear you're a racist now, father.",
  author:"",	
 img:racist}
]




  // 0 - 3 are the options here for useState
  const [activeObj, setActiveObj] = useState(0);

  // button calls randomcities function,len is length of array
  // setActiveCity at random number from array
  function randomObj(){
    const len = Tedarray.length;
    var random = Math.floor(Math.random() * len);
    setActiveObj(random);
  };


   
      return ( 


    <React.Fragment>     

<div id="tedwrap">
    <div className="mydiv" style={{
    	backgroundImage: "url(" + Tedarray[activeObj].img + ")"
    	
    	
    }} > 
<button className="teabut" onClick={randomObj} id="cuppa">
Go on!
 </button>
        <div className="quotewrap">
        <p className="quote">{Tedarray[activeObj].quote}</p>
        <span className="author">- {Tedarray[activeObj].author}</span>
        </div>
    	</div>
</div>


    </React.Fragment>
)
}
export default Father