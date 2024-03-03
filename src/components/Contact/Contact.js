import React from "react";
import "./contact.css";
import ContactForm from "./Contactform";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="getintouch">
        <div className="contact-heading">
          <h1>Get in Touch</h1>
        </div>
        <div className="contact-desc">
          <p>
            If you are interested in my work or want to provide feedback about
            this website, I am open to exchanging ideas .
          </p>
        </div>
      </div>
      <div className="Contactform-App">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
