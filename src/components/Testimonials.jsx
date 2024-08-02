import React from "react";
import Cards from "./Cards";

function Testimonials({ testimonials }) {
  return (
    <section>
      <div className="container margin-top">
        <div className="testimonials">
          <h2>{testimonials.title}</h2>
          <Cards review={testimonials.cards} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
