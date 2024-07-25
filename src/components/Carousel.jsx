import React from "react";

function Carousel({ data }) {
  return (
    <section className="margin-top">
      <div className="container-fluid bg-color">
        <div className="container">
          <div className="carousel">
            {data?.map((item, index) => (
              <div className="carousel__item">
                <h2>{item.no}</h2>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
