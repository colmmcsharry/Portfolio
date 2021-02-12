import React,{useState,useEffect} from "react"

function FetchQuote() {
const [quote,setQuote] = useState(" ");
const [loading,setLoading] = useState(true);
const [author,setAuthor]= useState(" ");
const [imgSrc,setImgSrc] = useState();

const myarray = ["inspire", "management", "sports", "life", "funny", "love", "art", "students" ]


const myword = "sports"

    useEffect(()=>{


/*every time this function runs, it fetchs a quote,(returns a promise), then we turn the result into json(data), then log it*/

    	fetch('http://quotes.rest/qod.json?category=inspire')
   /*    fetch('http://quotes.rest/qod.json?category=' + myword )     limit 10 per hour, try again later*/

.then(res=> res.json())
.then(data=>{
console.log(data);
setQuote(data.contents.quotes[0].quote);
setImgSrc(data.contents.quotes[0].background)
setAuthor(data.contents.quotes[0].author);

})



    },[])
      return(
    <React.Fragment>
    <div className="mydiv">
   <h1 className="quoteh1">{quote}</h1>
<p className="author">- {author}</p>
<img className="quoteimg" src={imgSrc} />
</div>
    </React.Fragment>
)
}
export default FetchQuote