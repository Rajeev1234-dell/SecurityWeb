import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Forms from "@/components/Forms";
import Hero2 from "@/components/Hero2";
import Main from "@/components/Main";
import {
  carouselSection,
  contactSecurity,
  footerItem,
  contactTile,
} from "@/json";
import React from "react";

function ContactUs() {
  return (
    <div>
      <Hero2 data={contactTile.title} />
      <Main mainSection={contactSecurity} />
      <Carousel carouselSection={carouselSection} />
      <Forms />
      <Footer item={footerItem} />
    </div>
  );
}

export default ContactUs;
