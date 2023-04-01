import React from "react";
import ContactForm from "../components/ContactForm";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  return (
    <main id="contact">
      <div className="socials--container">
        <a
          className="contact__link"
          href="https://www.facebook.com/TheVertigoes"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebook className="contact--icon" />
          <h1 className="contact__link--title">Facebook</h1>
        </a>
        <a
          className="contact__link"
          href="https://www.instagram.com/the__vertigoes/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram className="contact--icon" />
          <h1 className="contact__link--title">Instagram</h1>
        </a>
        <a
          className="contact__link"
          href="https://www.youtube.com/@the_vertigoes"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaYoutube className="contact--icon" />
          <h1 className="contact__link--title">YouTube</h1>
        </a>
      </div>
      <ContactForm />
    </main>
  );
}

export default Contact;
