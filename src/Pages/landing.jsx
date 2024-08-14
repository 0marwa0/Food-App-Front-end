import React from "react";
import Header from "../shared/header";
import Footer from "../shared/footer";
import AppSection from "../components/appSection";
import AppSteps from "../components/appSteps";
import Hearo from "../components/Hero";
import CustomPage from "../components/customPage";
function Landing() {
  return (
    <CustomPage>
      <Hearo />
      <AppSection />
      <AppSteps />
    </CustomPage>
  );
}

export default Landing;
