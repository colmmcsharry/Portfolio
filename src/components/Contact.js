import React, { useState } from 'react'
import { Link as ScrollLink} from "react-scroll";
import funstuff from '../pics/funstuff.png'
import iconlinkedin from '../pics/icon-linkedin.svg'
import icongithub from '../pics/icon-github.svg'
import NetlifyForm from 'react-ssg-netlify-forms'


export default function Contact()  {


const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
  const [formValues, setFormValues] = useState({
    name: '',
    message: ''
  }) ;



    return (
      <React.Fragment>
      <div className="contactwrap" id="Contact">
        <div className="container">

          
            <h2 className="contacth2">Contact Me</h2> 
          

  <ul className="details">
              <li>
                <strong>Phone:</strong>
                <p>083 838 1780</p>
              </li>
              <li>
                <strong>Accounts:</strong>
                <p className="onmob"><img src={iconlinkedin} alt="badge" loading="lazy" />  <img src={icongithub} alt="badge" loading="lazy"/> </p>
              </li>
              <li>
                <strong>Email:</strong>
                
                  <p>Colmmcpt@gmail.com</p>
                
              </li>
            </ul>



              <NetlifyForm formName="Very Simple Form" formValues={formValues}>
        <div>
          Your Name: <input type="text" name="name" value={formValues.name} onChange={handleChange} required />
        </div>
        <div>
          Message: <textarea name="message" value={formValues.message} onChange={handleChange} required />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </NetlifyForm>








          
            {/*<form method="post" name="contactform" action={`https://formspree.io/f/xleowbpw`}>
             
            <div>
              <label className="contactlabel">
                Your Name: <input type="text" name="name" required />
              </label>
            </div>
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
          </form>*/}


        </div>
<ScrollLink activeClass="active" to="galleryh3" spy={true} offset={-20} smooth={true} duration={900} ><div className="arrow projarrow funarrow">
        <img src={funstuff} alt="arrow" className="pngs"/>
        </div></ScrollLink>
        
      </div>
      
      
      </React.Fragment>
    );
  
}
