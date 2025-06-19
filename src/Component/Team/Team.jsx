
import React, { useState, useEffect } from "react";
import "./Team.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import sirazhar from "../../assets/3.png";
const teamData = {
  foundingTeam: [
    {
      name: "Imran Sarwar",
      role: "CEO",
      email: "Imran.sarwar@amtegrity.com",
      imgSrc: sirazhar,
      link: "/about/azhar"
    },
    {
      name: "Imran Sarwar",
      role: "CEO",
      email: "Imran.sarwar@amtegrity.com",
      imgSrc: sirazhar,
      link: "/about/azhar"
    },
    {
      name: "Imran Sarwar",
      role: "CEO",
      email: "Imran.sarwar@amtegrity.com",
      imgSrc: sirazhar,
      link: "/about/azhar"
    },
    {
      name: "Imran Sarwar",
      role: "CEO",
      email: "Imran.sarwar@amtegrity.com",
      imgSrc: sirazhar,
      link: "/about/azhar"
    },
    
  ],
  
};

export default function Team() {
  const [activeTab, setActiveTab] = useState("foundingTeam");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const renderTeamMembers = (members) => {
    return members.map((member, index) => (
      <div className="team-member" key={index}>
        <img src={member.imgSrc} alt={member.name} />
        
        <h3>{member.name}</h3>
        <p>({member.role})</p>
        <div className="contacts-info">
          <a href={`mailto:${member.email}`} className="email">
            {member.email}
          </a>
        </div>
      </div>
    ));
  };

  return (
    <>
    
      <section className="team" id="team">
        <div className="container-1">
          {/* Tab Navigation */}
          <div className="tab-navigation">
            {Object.keys(teamData).map((tab, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
              </button>
            ))}
            {/* <div className="active-tab-indicator" style={{ left: `${Object.keys(teamData).indexOf(activeTab) * 33.33}%` }} /> */}
          </div>
          {/* Team Member Cards */}
          <div className="team-members fade-in" data-aos="fade-up">
            {renderTeamMembers(teamData[activeTab])}
          </div>
        </div>
      </section>
    </>
  );
}
