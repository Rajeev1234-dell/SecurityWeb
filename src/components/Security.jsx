import React from "react";
import Button from "./Button";
import Security_icon from "../../public/SecuritySection/security.svg";
import Image from "next/image";

function Security({ content }) {
  console.log(content.desc);
  return (
    <section className="margin-top">
      <div className="container">
        <div className="security">
          <div className="security__data">
            {content?.map((item, index) => (
              <>
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </>
            ))}
            <Button children={"Order Now"} />
          </div>
          <div className="security__img">
            <div className="image">
              <Image src={Security_icon} width={532} height={458} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Security;
