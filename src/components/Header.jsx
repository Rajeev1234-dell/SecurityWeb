import Image from "next/image";
import React from "react";
import phone_icon from "../../public/HeroImages/phone.svg";
import Button from "./Button";
import humburger from "../../public/HeroImages/humburger.svg";
import Link from "next/link";

function Header({ data, headerSection }) {
  return (
    <header>
      <nav>
        <div className="navbar">
          <div className="navbar__logo">
            <Image src={headerSection.logo} width={40} height={40} alt="logo" />
            <Image
              src={headerSection.logo_name}
              width={88}
              height={24}
              alt="logo"
            />
          </div>
          <div className="navbar__links">
            <ul>
              {headerSection.list?.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.list}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar__buttons">
            <div className="navbar__phone-number">
              <Image src={phone_icon} width={27} height={24} alt="" />
              <span>{headerSection.phoneNo}</span>
            </div>
            <Button children={headerSection.btn} />
          </div>
          <div className="navbar__arrow">
            <Image src={humburger} width={23} height={16} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
