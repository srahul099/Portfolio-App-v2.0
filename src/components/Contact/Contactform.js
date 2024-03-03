import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState("");
  const [emailError, setEmailError] = useState(""); // new state for email error

  emailjs.init("bNQUpRTtSEp9ccub-");

  const validateEmail = (email) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setEmailError("Invalid email format"); // set the email error
    } else {
      setEmailError(""); // clear the email error
    }
  };

  const sendEmail = (event) => {
    event.preventDefault();

    const serviceID = "default_service";
    const templateID = "template_tphiclk";

    const name = event.target.from_name.value;
    const email = event.target.user_email.value;
    const message = event.target.message.value;

    if (!name || !email || !message || emailError) {
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    const params = {
      from_name: name,
      to_name: "Rahul",
      message: `Email: ${email}\nMessage: ${message}`,
    };

    emailjs.send(serviceID, templateID, params).then(
      () => {
        setIsSubmitting(false);
        setStateMessage("Sent!");
        setTimeout(() => setStateMessage(""), 5000); // message will disappear after 5 seconds
        event.target.reset(); // reset the form fields
      },
      (err) => {
        setIsSubmitting(false);
        setStateMessage("Failed to send email: " + JSON.stringify(err));
        setTimeout(() => setStateMessage(""), 5000); // message will disappear after 5 seconds
      }
    );
  };

  return (
    <form onSubmit={sendEmail} className="contact-form">
      <div className="field">
        <label htmlFor="from_name">Name</label>
        <input type="text" name="from_name" id="from_name" />
      </div>
      <div className="field">
        <label htmlFor="user_email">Email</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          onBlur={(e) => validateEmail(e.target.value)}
        />
        {emailError && <p className="emailError">{emailError}</p>}{" "}
        {/* display the email error */}
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" />
      </div>
      <input
        className="submit-btn"
        type="submit"
        value={
          stateMessage === "Sent!"
            ? "Sent!"
            : isSubmitting
            ? "Sending..."
            : "Send"
        }
        disabled={isSubmitting}
      />
      {/* {stateMessage && <p className="stateMessage">{stateMessage}</p>} */}
    </form>
  );
}

export default ContactForm;
