import Image from "next/image";
import footer_img from "../../public/FooterSection/footer.svg";
import React from "react";
import Footer from "./Footer";

function FooterBanner({ item }) {
  return (
    <section className="children">
      <div className="container">
        <div className="footer">
          <div className="footer__content">
            <div className="footer__display">
              <Image
                src={footer_img}
                width={324}
                height={340}
                alt=""
                className="footer-img"
              />
            </div>
            <div className="footer__title">
              <h2>Get Professional security service.</h2>
            </div>
            <button className="contact-btn">Contact Us Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterBanner;
