import React from "react";
import AboutStyle from "../styles/Skills.module.scss";
// import './Styles/Percent.css'
// import PercentageBox from './PercentageBox';

const skillsArr = [
  { title: "Java", percentage: "80", color: "#8e8dd9" },
  { title: "Python", percentage: "85", color: "#93e7cf" },
  { title: "JavaScript/ TypeScript", percentage: "88", color: "#6bd7f4" },
  { title: "HTML/CSS", percentage: "85", color: "#eb6f83" },
  { title: "SQL", percentage: "75", color: "#f0b57d" },
];

const Skills = () => {
  return (
    <div className={AboutStyle.skills}>
      <h2>What I Know</h2>
      <p className={AboutStyle.skillsDescription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text. Lorem
        Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <div className={AboutStyle.skillsContainer}>
        {skillsArr.map((skill, skillIndex) => {
          const offset = 440 - (440 * parseInt(skill.percentage)) / 100;
          return (
            <div className={`${AboutStyle.box}`}>
              <div className={`${AboutStyle.percent}`}>
                <svg>
                  <circle
                    cx="70"
                    cy="70"
                    r="70"
                    style={{ stroke: "gray" }}
                  ></circle>
                  <circle
                    cx="70"
                    cy="70"
                    r="70"
                    style={{
                      stroke: skill.color,
                      strokeDashoffset: offset,
                    }}
                  ></circle>
                </svg>
                <div className={`${AboutStyle.number}`}>
                  <h2>
                    {skill.percentage}
                    <span>%</span>
                  </h2>
                </div>
                <h3 className={`${AboutStyle.text}`}>{skill.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
