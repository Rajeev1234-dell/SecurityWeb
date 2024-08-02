import Image from "next/image";
import footer_img from "../../public/FooterSection/footer.svg";
import React from "react";
import Footer from "./Footer";

// children

function FooterBanner({ item }) {
  return (
    <section className="children footer">
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
            <button className="footer__btn">Contact Us Now</button>
          </div>
        </div>
      </div>
    </section>
    // <section className="container banner">
    //   <div className="banner__image">
    //     <Image src={footer_img} width={324} height={340} alt="" />
    //   </div>
    //   <div className="banner__wrapper">
    //     <div className="banner__title">
    //       <h2>Get Professional security service.</h2>
    //     </div>
    //     <button className="banner__btn">Contact Us Now</button>
    //   </div>
    // </section>
  );
}

export default FooterBanner;
