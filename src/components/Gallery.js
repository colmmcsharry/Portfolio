
import React from 'react'
import medog from '../pics/medog.JPG'
import newday from '../pics/newday.JPG'
import mefire from '../pics/mefire.jpg'
import merocky from '../pics/merocky.JPG'
import lklouise  from '../pics/lklouise.JPG'
import footy  from '../pics/footy.JPG'
import myvan from '../pics/myvan.jpg'
import memount  from '../pics/memount.JPG'
import snow from '../pics/snow.jpg'
import mefam from '../pics/mefam.JPG'
import LazyLoad from 'react-lazyload';




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

<div className ="funwrap">

		<div className="gallerywrap">
		{allpics.map(pic =>  <div className="igaldiv"> <img className="lol" src={pic} />  </div> 

		 )}

		</div>

		<div className="rightstuff">

		<ul>
			<li>stuff i like </li>
			<li>stuff i like </li>
			<li>stuff i like </li>
			<li>stuff i like </li>
			<li>stuff i like </li>



		</ul>

		</div> 

</div>

</React.Fragment>



	)




}

