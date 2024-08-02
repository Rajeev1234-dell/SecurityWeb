import React from "react";
import Button from "./Button";

function Forms() {
  return (
    <section className="form">
      <h2 className="form__title">
        Contact <span>Us</span>
      </h2>
      <div className="form__input">
        <form>
          <div className="form__nameField">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number" />
          <textarea
            placeholder="Message"
            className="form__messageField"
          ></textarea>
          <div className="form__button">
            <Button children={"Sumbit"} />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Forms;
