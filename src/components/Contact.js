import React from 'react'

export default function Contact()  {

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
                <strong>Socials:</strong>
                <p className="onmob">insert icons here</p>
              </li>
              <li>
                <strong>Email:</strong>
                
                  <p>Colmmcpt@gmail.com</p>
                
              </li>
            </ul>

          
            <form method="post" name="contactform" action={`https://formspree.io/f/xleowbpw`}>
             
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
          </form>


        </div>
      </div>
      
      
      </React.Fragment>
    );
  
}
