import React from "react";
import Header from "./Header";
import Button from "./Button";

function Hero({ data }) {
  return (
    <section>
      <div className="container-fluid heroBack">
        <div className="container">
          <Header data={data} />
          <div className="hero">
            <h1>Security Service For Your Personal Safety</h1>
            <p>
              only five centuries, but also the leap into electronic
              typesetting, remainingt essentially uncthanged. It was
              popularised.
            </p>
            <Button children={"Order Now"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
