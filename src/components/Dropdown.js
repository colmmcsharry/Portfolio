import React, {useState} from 'react';
import { Link as ScrollLink, Element } from "react-scroll";
import flaresun from '../pics/flaresun.png'
import { Spin as Hamburger } from 'hamburger-react'



export default function Dropdown(){


function showhide(){

const navlist = document.querySelector('.navlist');
navlist.classList.toggle('showhide') ;
}






return (

<div className="myburger" id="burg" onClick={showhide}  >
<Hamburger size={36} rounded label="show menu" />
<ul className="navlist">
<li><ScrollLink activeClass="active" to="About" spy={true} offset={-20} smooth={true} duration={900}> About </ScrollLink></li>
<li><ScrollLink activeClass="active" to="Myprojects" spy={true} offset={-20} smooth={true} duration={900}> Projects </ScrollLink></li>
<li><ScrollLink activeClass="active" to="Contact" spy={true} offset={-20} smooth={true} duration={900}> Contact </ScrollLink></li>
<li><ScrollLink activeClass="active" to="Contact" spy={true} offset={950} smooth={true} duration={900}> Fun Stuff </ScrollLink></li>

</ul>
</div>

)

}