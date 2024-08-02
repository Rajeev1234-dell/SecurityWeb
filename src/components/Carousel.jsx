import React from "react";

function Carousel({ carouselSection }) {
  return (
    <section className="background">
      <div className="container carousel">
        {carouselSection?.map((item, index) => (
          <div className="carousel__item">
            <h2>{item.no}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carousel;
