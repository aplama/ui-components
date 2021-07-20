import React, { Fragment } from "react";
import Features from "../../components/comp2/Features";
import Footer from "../../components/comp2/Footer";
import Hero from "../../components/comp2/Hero";
import Pricing from "../../components/comp2/Pricing";

export default function Home2() {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </Fragment>
  );
}
