import React from 'react';
import ReactDOM from 'react'


/*this is just a component that renders the button, which in turn triggers the function*/
function ChangeBg() {

function changeBk(){
	
	document.getElementById('hi').className += " MyClass";
	document.getElementById('welcome').className += " MyClass";
	document.getElementById('window').style.backgroundImage = "url('https://previews.123rf.com/images/photolight2/photolight21712/photolight2171200042/91477161-background-sunny-window-with-shiny-rain-drops-view-of-the-modern-city-abstract-texture-.jpg')";
	document.getElementById('rain').style.display = 'none';
	document.getElementById('changer').style.backgroundImage = "url('https://www.pinclipart.com/picdir/big/5-52873_rain-clipart-file-folder-emojis-clip-art-png.png')";

	var borderrrs = document.getElementsByClassName('border');
for (var i=0;i<borderrrs.length;i+=1){
  borderrrs[i].style.display = 'none';
}
}






return (
<button onClick={changeBk} id="changer"> </button>
)

}

export default ChangeBg