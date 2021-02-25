import React, { useState, useEffect } from 'react'
import { Link as ScrollLink} from "react-scroll";
import funstuff from '../pics/funstuff.png'
import iconlinkedin from '../pics/icon-linkedin.svg'
import icongithub from '../pics/icon-github.svg'



export default function Contact()  {







const [success, setSuccess] = useState(false);

useEffect(() => {
  if ( window.location.search.includes('success=true') ) {
    setSuccess(true);
    console.log('cheers!')
    document.getElementById('Contact').scrollIntoView()


  }
}, []);


    return (
      <React.Fragment>
      <div className="contactwrap" id="Contact">
        <div className="container">

          
            <h2 className="contacth2">Contact Me</h2> 

            {success && (
  <p style={{ color: 'green'}}>
    Thanks for the mail, excited to read it!
  </p>
)}
            
          

  <ul className="details">
              <li>
                <strong>Phone:</strong>
                <a style={{textDecoration:'none'}} href="tel:0838381780">083 838-1780</a>

              </li>
              <li>
                <strong>Accounts:</strong>
                <p className="onmob"><a href="https://www.linkedin.com/in/colm-mcsharry/"><img src={iconlinkedin} alt="badge" loading="lazy" /></a> 
                <a href="https://github.com/mcshazz"><img src={icongithub} alt="badge" loading="lazy"/></a> </p>
              </li>
              <li>
                <strong>Email:</strong>
                
                  <p>Colmmcpt@gmail.com</p>
               
              </li>
            </ul>

          
            <form method="post" id="contactform" name="contactform" data-netlify="true" action="https://colmsportfolio.netlify.app/?success=true">
             
            <div>
              <label className="contactlabel">
                Your Name: <input type="text" name="name" required />
              </label>
            </div>
            <input type="hidden" name="form-name" value="contactform" />
            <div>
              <label className="contactlabel">
                Your Email: <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label className="contactlabel">
                Message: <textarea name="message" required></textarea>
              </label>
            </div>
            <div>
              <button type="submit" className="sendbut">Send</button>
            </div>
          </form>

        </div>
<ScrollLink activeClass="active" to="galleryh3" spy={true} offset={-20} smooth={true} duration={900} ><div className="arrow projarrow funarrow">
        <img src={funstuff} alt="arrow" className="pngs"/>
        </div></ScrollLink>
        
      </div>
      
      
      </React.Fragment>
    );
  
}
