import React,{useState,useEffect} from "react"



function Father(){


const Tedarray = [

{quote: "Well, Ted, like I said the last time: 'it won't happen again'.",
author: "- Father Dougal"	
 },

 {quote: "So there he is. Risen from the dead. Like that fella... E.T.",
 author: "- Father Ted",

 }, 

{quote: " These are small, but those are far away... Small... Far away.",
author: "- Father Ted"	
 
 },

 {quote:"Sorry Ted, I was concentrating too hard on looking holy.",
 author:"- Father Dougal"
 },

 {quote:"I hear you're a racist now, father.",
  author:""
}
]

const [index, setIndex] = useState(0); // setting 1st quote as default
function changeQuote() {
let newIndex = index + 1;
if(newIndex === Tedarray.length){
  console.log('its 4!')
  newIndex = 0
}
setIndex(newIndex);
  }

const [activeObj, setActiveObj] = useState(Tedarray[1]);

  return ( 


    <>          
<p>{Tedarray[index].quote}</p>
<p>- {Tedarray[index].author}</p>
<button onClick={changeQuote}> change </button>
    </>
)
}
export default Father