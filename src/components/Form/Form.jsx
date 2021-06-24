import React from "react";
import emailjs from "emailjs-com";

import arrow from "../../assets/svg/arrow.svg";
import check from '../../assets/svg/checked.svg';

export default function Form() {
  return (
    <form className="contact-form" id="coop-form" onSubmit={sendEmail}>
      <div className="input_container">
        <div className="form_row">
          <input className="form_input" name="userName" type="text" placeholder="Ваше имя" />
          <input className="form_input" name="email" type="email" placeholder="E-Mail" />
        </div>
        <div className="form_row">
          <input className="form_input" name="phone" type="number" placeholder="Телефон" />
          <input className="form_input" name="message" type="text" placeholder="Комментарий" />
        </div>
      </div>
      <button className="form_button" type="submit">
        {console.log(check)}
        <img src={arrow} alt="arrow" />
      </button>
    </form>
  );
}

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_jvnqsbm",
      "template_ywurlnf",
      e.target,
      "user_9VbSUqve3la6eliYKyI4R"
    )
    .then(
      (result) => {
        document
          .querySelectorAll("#coop-form input")
          .forEach((input) => (input.value = ""));

        document.querySelector(".form_button > img").setAttribute('src', check);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
