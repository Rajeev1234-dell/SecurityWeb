import React from "react";
import Button from "./Button";

function Forms() {
  return (
    <section>
      <div className="container-fluid margin-top bg-img">
        <div className="forms-section">
          <div className="forms-section__content">
            <h2 className="forms-section__title">
              Contact <span>Us</span>
            </h2>
            <form>
              <div className="forms-section__nameField">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Phone Number" />
              <textarea
                placeholder="Message"
                className="messageInput"
              ></textarea>

              <Button children={"Sumbit"} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Forms;
