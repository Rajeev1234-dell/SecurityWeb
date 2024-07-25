import Image from "next/image";
import React from "react";
import logo_icon from "../../public/HeroImages/logo.svg";
import logo_name_icon from "../../public/HeroImages/AISCURE.svg";
import phone_icon from "../../public/HeroImages/phone.svg";
import Button from "./Button";

function Header({ data }) {
  return (
    <header>
      <nav>
        <div className="navbar">
          <div className="navbar__logo">
            <Image src={logo_icon} width={40} height={40} alt="logo" />
            <Image src={logo_name_icon} width={88} height={24} alt="logo" />
          </div>
          <div className="navbar__links">
            <ul>
              {data?.map((item, index) => (
                <li key={index}>{item.list}</li>
              ))}
            </ul>
          </div>
          <div className="navbar__buttons">
            <div className="navbar__phone-number">
              <Image src={phone_icon} width={27} height={24} alt="" />
              (219)-555-6767
            </div>
            <Button children={"Login"} />
            {/* <button>Login</button> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
