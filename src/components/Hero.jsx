import React from "react";
import Header from "./Header";
import Button from "./Button";

function Hero({ heroSection, headerSection }) {
  var log = heroSection.title;
  return (
    <section className="container-fluid hero">
      <div className="container">
        <Header headerSection={headerSection} />
        <div className="hero__wrapper">
          <h1
            className="hero__title"
            dangerouslySetInnerHTML={{ __html: log }}
          ></h1>
          <p className="hero__desc">{heroSection.desc}</p>
          <Button children={heroSection.btn} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
