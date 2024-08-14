import React from "react";
import Header from "../shared/header";
import { Children } from "react";
import Footer from "../shared/footer";
import "../styling/customPage.css";
function CustomPage({ children }) {
  return (
    <div className="pageLayout">
      <Header />
      <div className="pageContent">{children}</div>
      <Footer />
    </div>
  );
}

export default CustomPage;
