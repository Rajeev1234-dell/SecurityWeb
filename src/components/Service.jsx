import Image from "next/image";
import React from "react";

function Service({ items }) {
  return (
    <section className="margin-top">
      <div className="container">
        <div className="service">
          <div className="service__data">
            <h2>Our Services Make Your Work Productive</h2>
            <p>
              only five centuries, but also the leap into electronic typed when
            </p>
          </div>
          <div className="service__list">
            {items?.map((items, index) => (
              <div className="service__list__items">
                <Image src={items.icon} width={72} height={72} alt="" />
                <h1>{items.title}</h1>
                <p>{items.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
