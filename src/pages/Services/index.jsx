import Footer from "@/components/Footer";
import Forms from "@/components/Forms";
import Security from "@/components/Security";
import { footerItem, mainSection, securitySection } from "@/json";
import React from "react";
import {
  serviceTile,
  servicesSecurity,
  servicesSecurity2,
  servicesSecurity3,
  servicesSecurity6,
  servicesSecurity4,
  servicesSecurity5,
} from "@/json";
import Main from "@/components/Main";
import Hero2 from "@/components/Hero2";
// import { Main } from "next/document";

function Services() {
  return (
    <div>
      <Hero2 data={serviceTile.title} />
      <Main mainSection={servicesSecurity6} />
      <Security securitySection={servicesSecurity5} />
      <Main mainSection={servicesSecurity4} />
      <Security securitySection={servicesSecurity3} />
      <Main mainSection={servicesSecurity2} />
      <Security securitySection={servicesSecurity} />
      <Forms />
      <Footer item={footerItem} />
    </div>
  );
}

export default Services;
