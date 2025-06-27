import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="skills-titles">
        <p className="technical">TECHNICAL EXPERTISE</p>
        <h1 className="skills1">Skills & Technologies</h1>
      </div>
      <div className="skills-buttons">
        <button className="b1">HTML</button>
        <button className="b2">CSS</button>
        <button className="b3">JAVASCRIPT</button>
        <button className="b11">TailwindCSS</button>
        <button className="b5">ReactJs</button>
        {/* <button className="b4">NextJS</button> */}
        {/* <button className="b6">NodeJs</button> */}
        {/* <button className="b7">MongoDB</button> */}
        {/* <button className="b8">EC2(AWS)</button> */}
        {/* <button className="b9">Docker</button> */}
        {/* <button className="b10">Typescript</button> */}
      </div>
    </div>
  );
};

export default Skills;
