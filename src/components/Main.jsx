import React from "react";
import calling_icon from "../../public/MainSectionImages/calling.svg";
import Image from "next/image";
import Button from "./Button";

function Main({ list, content }) {
  return (
    <section className="margin-top">
      <div className="container">
        <div className="main-section">
          <div className="main-section__img">
            <div className="section-img">
              <Image src={calling_icon} width={558} height={480} alt="" />
            </div>
          </div>
          <div className="main-section__data">
            {content?.map((item, index) => (
              <>
                <h1>{item.title}</h1> <p>{item.desc}</p>
              </>
            ))}
            <ul>
              {list?.map((items, index) => (
                <li key={index}>{items.list}</li>
              ))}
            </ul>
            <Button children={"Read More"} className="btn" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
