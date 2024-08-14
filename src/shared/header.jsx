import React from "react";
import { CiUser } from "react-icons/ci";
import MainLogo from "../assets/Icons/MainLogo.svg";
import { CiShoppingCart } from "react-icons/ci";
import "../styling/header.css";

function Header() {
  return (
    <nav>
      <div>
        <img src={MainLogo} alt="Hanki Logo" />
      </div>
      <div className="user-nav">
        <div className="business-btn">
          <CiShoppingCart size={30} className="cart-icon" />
          <button className="main-btn flex-row">
            <CiUser size={30} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
