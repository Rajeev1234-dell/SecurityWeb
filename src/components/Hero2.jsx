import React from "react";
import Header from "./Header";
import { headerSection } from "@/json";

function Hero2({ data }) {
  var d = data;
  return (
    <section className="container-fluid bg">
      <div className="container">
        <Header headerSection={headerSection} />
        <div className="hero2">
          <div
            className="hero2__title"
            dangerouslySetInnerHTML={{ __html: d }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero2;
