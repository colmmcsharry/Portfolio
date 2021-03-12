import React from 'react'
import medog from '../pics/medog.JPG'
import newday from '../pics/newday.JPG'
import { Link as ScrollLink, Element} from "react-scroll";
import mefire from '../pics/mefire.jpg'
import merocky from '../pics/merocky.JPG'
import lklouise  from '../pics/lklouise.JPG'
import footy  from '../pics/footy.JPG'
import myvan from '../pics/myvan.jpg'
import memount  from '../pics/memount.JPG'
import snow from '../pics/snow.jpg'
import Father from './Father.js'
import totop from '../pics/totop.png'




const allpics = [newday, medog, merocky, mefire, lklouise, memount, footy, snow, myvan] ;






export default function Gallery(){
window.onload = setTimeout(function() {






var getlol = document.querySelectorAll('.igaldiv') ;





for (let i = 1 ; i < getlol.length ; i+=2 ) {
getlol[i].onclick = function(){
	getlol[i].classList.toggle('gotall');
getlol[i].onmouseout = function(){getlol[i].classList.remove('gotall')}
}
} ;

for (let x = 0 ; x < getlol.length ; x+=2 ) {
getlol[x].onclick = function(){
	getlol[x].classList.toggle('gowide');
getlol[x].onmouseout = function(){getlol[x].classList.remove('gowide')}
}
}




/*

var txtimgs = document.querySelectorAll('figure') ;


for ( let i=0; i < txtimgs.length ; i++){

txtimgs[i].onclick = function(){
txtimgs[i].classList.toggle('testclass');

txtimgs[i].onmouseout = function(){txtimgs[i].classList.remove('testclass')}
}


}
*/
















} , .1000   ) 


return (

	<React.Fragment>
<Element name="funwrapper"> </Element>
<div className ="funwrap fadeload" id="funwrapper">
		<h3 id="galleryh3">My Gallery</h3>
		<div className="gallerywrap">

		{allpics.map(pic =>  <div className="igaldiv"> <img className="lol" src={pic} alt="galleryimgs" />  </div> 

		 )}

		</div>

		<div className="rightstuff">
		<h3 id="misch3">Misc</h3>
		<p>If you want to see how far I've come on my coding journey, here's links to two of my oldest "projects", complete with awful sound effects!</p>
		<a href="https://mcshazz.github.io/gridRPS/" target="_blank" rel="noreferrer">Rock, Paper, Scissors</a> {'\u00A0 \u00A0 \u00A0 \u00A0 '} 
		<a href="https://mcshazz.github.io/LyricsGame/" target="_blank" rel="noreferrer">Lyrics Game</a> <br/>

		<ul className="cool-list">
			<li>Some Podcasts I learn from... </li>
			<li> The CSS Podcast, Syntax, Self-Made Web Designer, Deep Questions</li>
			

			<li> My productivity playlist... </li>
			<li> <iframe src="https://open.spotify.com/embed/playlist/3IasJfydbCLFsh6WM6xnWY" title="myplaylist" width="100%" height="170" frameBorder="1" loading="lazy" allow="encrypted-media"></iframe></li>
			<li> Just for fun... </li>

		</ul>

		<Father />

		</div> 

</div>
<ScrollLink activeClass="active" to="top" spy={true} offset={-20} smooth={true} duration={900} ><div className="arrow projarrow lastarrow" id="totop"><img alt="totoparrow" id="totopimg" src={totop}/></div></ScrollLink>
</React.Fragment>



	)




}

