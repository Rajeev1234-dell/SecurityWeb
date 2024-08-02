import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Forms from "@/components/Forms";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import Main from "@/components/Main";

import {
  footerItem,
  carouselSection,
  testimonials,
  mainSection,
  securitySection,
  aboutTile,
} from "@/json";

import React from "react";
import Hero2 from "@/components/Hero2";

function AboutUs() {
  return (
    <div>
      <Hero2 data={aboutTile.title} />
      <Main mainSection={mainSection} />
      <Security securitySection={securitySection} />
      <Carousel carouselSection={carouselSection} />
      <Testimonials testimonials={testimonials} />
      <Forms />
      <Footer item={footerItem} />
    </div>
  );
}

export default AboutUs;
