import Image from "next/image";
import React from "react";
import logo from "../../public/HeroImages/logo.svg";
import logo_name from "../../public/HeroImages/AISCURE.svg";

function Header({ data }) {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="navbar" style={{ backgroundColor: "aqua" }}>
            <div className="navbar__logo">
              <Image src={logo} width={40} height={40} alt="logo" />
              <Image src={logo_name} width={88} height={24} alt="logo" />
            </div>
            <div className="navbar__links">
              <ul>
                {data?.map((item, index) => (
                  <li key={index}>{item.list}</li>
                ))}
              </ul>
            </div>
            <div className="navbar__buttons">
              <div className="navbar__phone-number">(219)-555-6767</div>
              <button>Login</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
