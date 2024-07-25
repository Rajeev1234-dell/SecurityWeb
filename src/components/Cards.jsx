import Image from "next/image";
import React from "react";

function Cards({ review }) {
  return (
    <div className="cards">
      {review?.map((card) => (
        <div className="cards__details">
          <Image src={card.icon} width={40} height={36} alt="" />
          <p>{card.desc}</p>
          <div className="cards__profile">
            <Image src={card.prfile_img} width={60} height={60} alt="" />
            <h4>{card.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
