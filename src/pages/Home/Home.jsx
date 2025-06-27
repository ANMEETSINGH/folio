import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Experience from "../../components/Experience/Experience";
import Skills from "../../components/Skills/Skills";
import Work from "../../components/Work/Work";
const Home = () => {
  return (
    <div>
      <Header className="homeheader" />
      <Experience />
      <Skills />
      <Work />
    </div>
  );
};

export default Home;
