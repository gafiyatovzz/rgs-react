import React from "react";
import emailjs from "emailjs-com";

import arrow from "../../assets/svg/arrow.svg";
import check from '../../assets/svg/checked.svg';

export default function Form() {
  return (
    <form className="contact-form" id="coop-form" onSubmit={sendEmail}>
      <div className="input_container">
        <div className="form_row">
          <input className="form_input" type="text" placeholder="Ваше имя" />
          <input className="form_input" type="email" placeholder="E-Mail" />
        </div>
        <div className="form_row">
          <input className="form_input" type="number" placeholder="Телефон" />
          <input className="form_input" type="text" placeholder="Комментарий" />
        </div>
      </div>
      <button className="form_button" type="submit">
        <img src={arrow} alt="arrow" />
      </button>
    </form>
  );
}

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_gj9vtf5",
      "template_t6opwsk",
      e.target,
      "user_AcYeG4byo4meSAUiTCfA"
    )
    .then(
      (result) => {
        document
          .querySelectorAll("#coop-form input")
          .forEach((input) => (input.value = ""));

        document.querySelector(".form_button img").setAttribute('src', {check});
      },
      (error) => {
        console.log(error.text);
      }
    );
}
