import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import data from "../json";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Carousel from "@/components/Carousel";
import Service from "@/components/Service";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";

// for json file----
import { securityData } from "../json";
import { testimonials } from "../json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AISCURE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <>
          <Hero data={data.itemList} />
          <Main list={data.mainContentList} content={data.mainContent} />
          <Service items={data.serviceData} />
          <Security content={securityData} />
          <Carousel data={data.carouselData} />
          <Testimonials review={testimonials} />
        </>
      </main>
    </>
  );
}
