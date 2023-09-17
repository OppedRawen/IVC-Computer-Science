import React from "react";
import HomeActivities from "../components/home/HomeActivities";
import HomeContent from "../components/home/HomeContent";
import HomeHero from "../components/home/HomeHero";

const NewHome = () => {
  return (
    <div>
      <HomeHero />
      <HomeContent />
      <HomeActivities />
    </div>
  );
};

export default NewHome;
