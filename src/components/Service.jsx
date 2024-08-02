import Image from "next/image";
import React from "react";

function Service({ serviceSection }) {
  return (
    <section>
      <div className="container service">
        <div className="service__data">
          <h2>{serviceSection.title}</h2>
          <p>{serviceSection.desc}</p>
        </div>
        <div className="service__list">
          {serviceSection.lists?.map((items, index) => (
            <div className="service__items">
              <Image src={items.icon} width={72} height={72} alt="" />
              <h3>{items.title}</h3>
              <p>{items.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
