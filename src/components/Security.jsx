import React from "react";
import Button from "./Button";
import Image from "next/image";

function Security({ securitySection }) {
  return (
    <section className="margin-top">
      <div className="container security">
        <div className="security__content">
          <div className="security__title">
            {securitySection.titleImg && (
              <Image
                src={securitySection.titleImg}
                width={63}
                height={63}
                alt=""
              />
            )}
            <h2>{securitySection.title}</h2>
          </div>
          <p>{securitySection.desc}</p>
          {securitySection.items &&
            securitySection.items?.map((item, index) => (
              <li key={index}>{item.item}</li>
            ))}
          <Button children={securitySection.btn} className="security__button" />
        </div>
        <div className="security__imgContainer">
          <div className="security__pic">
            <Image src={securitySection.img} width={532} height={458} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Security;
