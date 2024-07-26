import Image from "next/image";
import React from "react";
import logo_icon from "../../public/HeroImages/logo.svg";
import logo_name_icon from "../../public/HeroImages/AISCURE.svg";
import FooterBanner from "./FooterBanner";

function Footer({ item }) {
  return (
    <section>
      <div className="container-fluid bg-color parent">
        <FooterBanner />
        <div className="footer__details">
          <div className="footer__details__information">
            <div className="footer__logo">
              <Image src={logo_icon} width={40} height={40} alt="logo" />
              <Image src={logo_name_icon} width={88} height={24} alt="logo" />
            </div>
            <div className="footer__details__content">
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud e
              </p>
            </div>
          </div>
          {item?.map((item) => (
            <div className="footer__details__items">
              <p>{item.title}</p>
              <ul>
                {item.items.map((data, index) => (
                  <li>{data}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
