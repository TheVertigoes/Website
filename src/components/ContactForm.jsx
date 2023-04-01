import React, { useRef } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

import { AiOutlineLoading3Quarters, AiOutlineCheck } from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    document.querySelector(".contact__sending--container").style.display =
      "flex";

    emailjs
      .sendForm(
        "service_0zph4x5",
        "template_vlnizbt",
        form.current,
        "o0DX7wrTobI2aQhOB"
      )
      .then(
        (result) => {
          document.querySelector(".contact__sending--container").style.display =
            "none";
          document.querySelector(".contact__succes").style.display = "flex";
          console.log(result);
        },
        (error) => {
          document.querySelector(".contact__sending--container").style.display =
            "none";
          document.querySelector(".contact__error").style.display = "flex";
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact--container">
      <div className="contact__sending--container">
        <AiOutlineLoading3Quarters className="contact__sending--icon" />
      </div>
      <div className="contact__succes">
        <AiOutlineCheck className="contact__send--icon" />
      </div>
      <div className="contact__error">
        <BiErrorAlt className="contact__send--icon" />
        <h1 className="contact__error--title">Something went wrong!</h1>
        <h2 className="contact__error--sub-title">
          Contact us here: thevertigoes@outlook.com
        </h2>
      </div>
      <form ref={form} id="contact__form" onSubmit={sendEmail}>
        <div className="form__item">
          <label className="form__item--label">Name</label>
          <input
            className="input"
            name="user_name"
            type="text"
            required
          ></input>
        </div>
        <div className="form__item">
          <label className="form__item--label">Email</label>
          <input
            className="input"
            name="user_email"
            type="email"
            required
          ></input>
        </div>
        <div className="form__item">
          <label className="form__item--label label--last">Message</label>
          <textarea
            className="input textarea__input"
            name="message"
            type="text"
            required
          ></textarea>
        </div>
        <input
          type="submit"
          id="contact__submit"
          className="form__submit"
          value="Send"
        />
      </form>
      <div className="modal__overlay modal__overlay--loading">
        <i className="fas fa-spinner"></i>
      </div>
    </div>
  );
}

export default ContactForm;
