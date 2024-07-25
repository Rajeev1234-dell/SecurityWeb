import React from "react";
import Cards from "./Cards";

function Testimonials({ review }) {
  return (
    <section>
      <div className="container margin-top">
        <div className="testimonials">
          <h2>Testimonials</h2>
          <Cards review={review} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
