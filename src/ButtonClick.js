import React from 'react';
import ReactDOM from 'react'
import daypic from './panb-min.jpg'


export default function ButtonClick() {

function myfunction(){
	document.getElementById('window').style.backgroundImage = `url(${daypic})`
}


return (
	<button onClick = {myfunction}> Click Here! </button>




	)




}