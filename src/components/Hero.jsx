import React from "react";
import Header from "./Header";
import Button from "./Button";

function Hero({ heroSection, headerSection }) {
  var log = heroSection.title;
  console.log(heroSection, "----");
  return (
    <section className="hero">
      <div className="container">
        <Header headerSection={headerSection} />
        <div className="hero__wrapper">
          <h1
            className="hero__title"
            dangerouslySetInnerHTML={{ __html: log }}
          ></h1>
          <p className="hero__desc">{heroSection.desc}</p>
          <Button children={heroSection.btn} />
        </div>
      </div>
    </section>
    // <section className="hero">
    //   <div className="container">
    //     This article is about the Republic of India. For other uses, see India
    //     (disambiguation). Republic of India Bhārat Gaṇarājya Horizontal
    //     tricolour flag bearing, from top to bottom, deep saffron, white, and
    //     green horizontal bands. In the centre of the white band is a navy-blue
    //     wheel with 24 spokes. Flag Three lions facing left, right, and toward
    //     viewer, atop a frieze containing a galloping horse, a 24-spoke wheel,
    //     and an elephant. Underneath is a motto: "सत्यमेव जयते". State emblem
    //     Motto: "Satyameva Jayate" (Sanskrit) "Truth Alone Triumphs"[1] Anthem:
    //     "Jana Gana Mana" (Hindi)[a][2][3] "Thou Art the Ruler of the Minds of
    //     All People"[4][2] Duration: 1 minute and 4 seconds.1:04 National song:
    //     "Vande Mataram" (Sanskrit)[c] "I Bow to Thee, Mother"[b][1][2] Duration:
    //     2 minutes and 26 seconds.2:26 Image of a globe centred on India, with
    //     India highlighted. Territory controlled by India shown in dark green;
    //     territory claimed but not controlled shown in light green Capital New
    //     Delhi 28°36′50″N 77°12′30″E Largest city Mumbai (city proper) Delhi
    //     (metropolitan area) Official languages HindiEnglish[d][8] Recognised
    //     regional languages State level and Eighth Schedule[9] Native languages
    //     447 languages[g] Religion (2011) 79.8% Hinduism 14.2% Islam 2.3%
    //     Christianity 1.7% Sikhism 0.7% Buddhism 0.4% Jainism 0.23% unaffiliated
    //     0.65% other[12] Demonym(s) Indianothers Government Federal parliamentary
    //     republic • President Droupadi Murmu • Vice President Jagdeep Dhankhar •
    //     Prime Minister Narendra Modi Legislature Parliament • Upper house Rajya
    //     Sabha • Lower house Lok Sabha Independence from the United Kingdom •
    //     Dominion 15 August 1947 • Republic 26 January 1950 Area • Total
    //     3,287,263 km2 (1,269,219 sq mi)[2][h] (7th) • Water (%) 9.6 Population •
    //     2023 estimate Neutral increase 1,428,627,663[14] (1st) • 2011 census
    //     Neutral increase 1,210,854,977[15][16] (2nd) • Density 425.9/km2
    //     (1,103.1/sq mi) (30th) GDP (PPP) 2024 estimate • Total Increase $14.594
    //     trillion[17] (3rd) • Per capita Increase $10,123[17] (125th) GDP
    //     (nominal) 2024 estimate • Total Increase $3.937 trillion[17] (5th) • Per
    //     capita Increase $2,731[17] (136th) Gini (2021) Positive decrease
    //     32.8[18] medium HDI (2022) Increase 0.644[19] medium (134th) Currency
    //     Indian rupee (₹) (INR) Time zone UTC+05:30 (IST) DST is not observed.
    //     Date format dd-mm-yyyy[i] Driving side left[20] Calling code +91 ISO
    //     3166 code IN Internet TLD .in (others) India, officially the Republic of
    //     India (ISO: Bhārat Gaṇarājya),[21] is a country in South Asia. It is the
    //     seventh-largest country by area; the most populous country with effect
    //     from June 2023;[22][23] and from the time of its independence in 1947,
    //     the world's most populous democracy.[24][25][26] Bounded by the Indian
    //     Ocean on the south, the Arabian Sea on the southwest, and the Bay of
    //     Bengal on the southeast, it shares land borders with Pakistan to the
    //     west;[j] China, Nepal, and Bhutan to the north; and Bangladesh and
    //     Myanmar to the east. In the Indian Ocean, India is in the vicinity of
    //     Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a
    //     maritime border with Thailand, Myanmar, and Indonesia.
    //   </div>
    // </section>
  );
}

export default Hero;
