import React from "react";
import "./Contactpage.css";
import ContactForm from "./Contactform";
const Contact = () => {
  document.title = "Portfolio | Contact";
  return (
    <div className="contact-wrapper">
      <div className="contactpage_heading">
        <h1>CONTACT</h1>
      </div>
      <div className="contact-container">
        <div className="getintouch">
          <div className="contact-heading">
            <h1>Lets Chat!</h1>
          </div>
          <div className="contact-desc">
            <p>
              If you are interested to collaborate on projects or want to
              provide feedback about any of my projects lets chat .
            </p>
          </div>
        </div>
        <div className="Contactform-App">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
