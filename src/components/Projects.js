import React from 'react';
import ReactDOM from 'react'
import Modal from './Modal.js'
import { Link as ScrollLink, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import Contact from '../pics/Contact.png'
import crezopic1new from '../pics/crezopic1new.jpg'
import crezopic2 from  '../pics/crezopic2.jpg'
import crezopic3 from '../pics/crezopic3.jpg'
import crezopic4 from '../pics/crezopic4.jpg'
import networkerspic from '../pics/networkerspic.jpg'
import networkerspic2 from '../pics/networkerspic2.jpg'
import networkerspic3 from '../pics/networkerspic3.jpg'
import networkershot from '../pics/networkersshot.jpg'
import cb1 from '../pics/cb1.jpg'
import cb2 from '../pics/cb2.jpg'
import cb3 from '../pics/cb3.jpg'
import cb4 from '../pics/cb4.jpg'
import Proj from './Proj.js'
import {bigtext} from './text.js'

import {alldescriptions} from './text.js'











export default function Projects(){



return (
<React.Fragment>



 <h3 className="My-Projects"><Element name="Myprojects" ></Element>My Projects
</h3>

<Proj title="Crezo Construction" description={alldescriptions.crezotext} image1={crezopic1new} image2={crezopic2} image3={crezopic3} image4={crezopic4} link="https://crezo.netlify.app/" />
<ScrollLink activeClass="active" to="Project2" spy={true} offset={-20} smooth={true} duration={900} ><div className="arrow projarrow" id="firstprojarrow"></div></ScrollLink> 


<Element name="Project2" ></Element>
<Proj title="Cosy Cabins" description={alldescriptions.cabintext} image1={cb1} image2={cb2} image3={cb3} image4={cb4} link="https://mcshazz.github.io/CosyCabins/" />
<ScrollLink activeClass="active" to="Project3" spy={true} offset={-20} smooth={true} duration={900} ><div className="arrow projarrow lastarrow"></div></ScrollLink>

<Element name="Project3" ></Element>
<Proj title="Networkers" description={alldescriptions.networktext} image1={networkerspic} image2={networkerspic2} image3={networkerspic3} image4={networkershot} link="https://mcshazz.github.io/NetWorkers/" />
<ScrollLink activeClass="active" to="Contact" spy={true} offset={-20} smooth={true} duration={900} ><div className="arrow projarrow lastarrow">
<img className="pngs" src={Contact} />
</div>
</ScrollLink>



</React.Fragment>


	)

}