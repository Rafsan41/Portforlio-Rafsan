import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import ProjectShowSections from "../ProjectShowSections/ProjectShowSections";
import RandomeQouteSection from "../RandomQouteSection/RandomeQouteSection";
import NavBar from "../../../sharedComponant/NavBar/NavBar";

const Home = () => {
  return (
    <div className="homeMain">
      <div className="nav-var">
        <NavBar></NavBar>
      </div>
      <HeroSection></HeroSection>
      <RandomeQouteSection></RandomeQouteSection>
      <ProjectShowSections></ProjectShowSections>
    </div>
  );
};

export default Home;
