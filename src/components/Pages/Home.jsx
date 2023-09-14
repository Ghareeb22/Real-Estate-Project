import React from "react";
import "../../App.css";
import GetStarted from "../GetStarted/GetStarted";
import Contact from "../Contact/Contact";
import Value from "../Value/Value";
import Residencies from "../Residencies/Residencies";
import Footer from "../Footer/Footer";
import Companies from "../Compaines/Companies";

function Home() {
  return (
    <>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </>
  );
}
export default Home;
