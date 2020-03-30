import React from 'react';
import ReactDOM from 'react'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

/*this is just a functioncomponent that renders the button, which in turn triggers the function*/
function Scroller() {

function disappear() {

  document.getElementsByClassName('arrow')[0].style.opacity = '0.2';


 /* scrollToTop = () => {
    scroll.scrollToTop();
}; i will use this function at the end, */
};



return (
	<React.Fragment>
	

	<div className="arrow" > 
	<ScrollLink
	onClick={disappear}
    activeClass="active"
    to="bio"
    spy={true}
    smooth={true}
    offset={180}
    duration= {900}>

                <span></span>
                <span></span>
                <span></span>
</ScrollLink>
</div>
</React.Fragment>
)

}

export default Scroller