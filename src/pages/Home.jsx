import React, { useEffect } from "react";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import LoadingState from "./LoadingState";
import TopNav from "../components/TopNav";
import VIPSignup from "../components/VIPSignUp";
import SecondaryNav from "../components/SecondaryNav";
import StateSelector from "../components/StateSelector";
import StickySecondaryNav from "../components/StickySecondaryNav";

import { usePageLoad } from "../hooks/usePageLoad";

const Home = () => {
  const pageIsLoaded = usePageLoad();

  return (
    <>
      {pageIsLoaded ? (
        <LoadingState />
      ) : (
        <>
          <TopNav />
          <SecondaryNav />
          <StickySecondaryNav />
          <Hero />
          <VIPSignup />
          <StateSelector />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
