import React from "react";
import calling_icon from "../../public/MainSectionImages/calling.svg";
import Image from "next/image";
import Button from "./Button";

function Main({ mainSection }) {
  return (
    <section>
      <div className="container main-section">
        <div className="main-section__img">
          <div className="main-section__pic">
            <Image src={mainSection.img} width={558} height={480} alt="" />
          </div>
        </div>
        <div className="main-section__content">
          <div className="main-section__title">
            {mainSection.titleImg && (
              <Image src={mainSection.titleImg} width={63} height={63} alt="" />
            )}
            <h3>{mainSection.title}</h3>
          </div>
          <p>{mainSection.desc}</p>
          <ul className="main-section__dots">
            {mainSection.items?.map((items, index) => (
              <li key={index} className="main-section__itemList">
                <span className="main-section__list">{items.list}</span>
              </li>
            ))}
          </ul>
          <Button children={mainSection.btn} className="main-section__btn" />
          <div className="main-section__logos">
            <ul>
              {mainSection.icons?.map((items, index) => (
                <li key={index} className="main-section__icons">
                  <Image src={items.icon} width={30} height={30} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
