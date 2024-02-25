import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work"
        body={
          <div className="works-body">

            <div className="work">
              <img src="/qa33.png" alt="goledgerQA" className="qa1" />
              <div className="work-title">GoLedger</div>
              <div className="work-subtitle">QA</div>
              <div className="work-duration">2023 - 2024</div>
            </div>

            <div className="work">
              <img src="/qa1.png" alt="goledgerQA" className="qa2" />

              <div className="work-title">Checkmate Property</div>
              <div className="work-subtitle">QA Engineer</div>
              <div className="work-duration">2022 - 2023</div>
            </div>

            <div className="work">
              
               <img src="/front2.png" alt="goledgerQA" className="qa3" />
              <div className="work-title">BANCO DO NORDESTE</div>
              <div className="work-subtitle">Front end Junior</div>
              <div className="work-duration">2021 - 2022</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Works;
