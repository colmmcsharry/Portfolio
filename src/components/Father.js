import React,{useState} from "react"
import dougal2 from '../pics/dougal2.jpg'
import Ted from '../pics/Ted.jpg'
import racist from '../pics/racist.jpg'
import tedbanner from '../pics/tedhead.png'
import jack from '../pics/jack.jpg'


function Father(){

  const Tedarray = [

{quote: "Well, Ted, like I said the last time: 'it won't happen again'.",
author: "- Father Dougal" ,
 img: dougal2 },

 {quote: "So there he is. Risen from the dead. Like that fella... E.T.",
 author: "- Father Ted",  
 img: Ted
 }, 

{quote: " These are small, but those are far away... Small... Far away.",
author: "- Father Ted"  ,
 img: Ted
 },

 {quote:"Sorry Ted, I was concentrating too hard on looking holy.",
 author:"- Father Dougal",
 img:dougal2},

 {quote:"I hear you're a racist now, father.",
  author:"",  
 img:racist},

{quote:<React.Fragment> <div className="doublequote"><span className="authorspan">Ted:</span> Dougal, do we have any incense? <br/><br/>
  <span className="authorspan">Dougal:</span> There was... a spider in the bath the other night.</div></React.Fragment>,
author: '',  
 img:dougal2},

{quote:"The Spider-Baby, it's got the body of a spider, but the mind of a baby",
  author:"- Father Dougal",  
 img:dougal2},

 {quote:"That money was just resting in my account!",
 author: "- Father Ted" ,
 img: Ted },

{quote:"I'm no good at judging the size of crowds, Ted, but I'd say there's about 17 million of them out there.",
  author:"- Father Dougal",  
 img:dougal2 },

{quote:<React.Fragment> <div className="doublequote"><span className="authorspan">Ted:</span> Would you like your pizza cut into 6 or 8 slices Dougal?<br/><br/>
  <span className="authorspan">Dougal:</span> Oh just 6, I don’t think I could eat 8.</div></React.Fragment>,
author: '',  
 img:dougal2},

{quote:"Where am I? What's that thing there? Are those my feet?",  
author:"- Father Jack",
 img:jack }
]



/*cup animation starts*/
window.onload = setTimeout(function() {

	const cup = document.getElementById('cuppa');

	// cup.classList.add('updown');
	cup.onclick = function(){

	cup.classList.toggle('tip');

  // setTimeout((){
  //   cup.classList.add('test2')
  // }, 200 ) ;

  setTimeout(() => {
    cup.classList.remove('tip')
  }, 200);

	}
    } , 1000  )
/*cup animation ends*/




/*this one just chooses the one to show on startup*/


  // button calls randomcities function,len is length of array
  // setActiveCity at random number from array
  // function randomObj(){
  //   const len = Tedarray.length;
  //   var random = Math.floor(Math.random() * len);
  //   setActiveObj(random);
  // };

var randomstart = Math.floor(Math.random() * 10);
  // 0 - 10 are the options here for useState
const [activeObj, setActiveObj] = useState(randomstart);

function next(){
  let newactiveObj = activeObj + 1;
  if(newactiveObj === Tedarray.length){
    newactiveObj = 0
  }
  setActiveObj(newactiveObj)
}

   
      return ( 


    <React.Fragment>     

<div id="tedwrap">
<img className="tedbanner" src={tedbanner} alt="FatherTedimgs"/>
    <div className="mydiv" style={{
    	backgroundImage: "url(" + Tedarray[activeObj].img + ")"
    	
    	
    }} > 
<button className="teabut" onClick={next} id="cuppa">
Go on!
 </button>
        <div className="quotewrap">
        <p className="quote">{Tedarray[activeObj].quote}</p>
        <span className="author"> {Tedarray[activeObj].author}</span>
        
        </div>
    	</div>
</div>


    </React.Fragment>
)
}
export default Father