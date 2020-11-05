import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Skills from "../assets/images/skills1.jpg";
import Projects from "../assets/images/project2.jpg";
import Contact from "../assets/images/contact1.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Have a look around and let me know what you think!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Skills}
              text="Skills"
              label="Skills"
              path="/skills"
            />
            <CardItem
              src={Projects}
              text="Projects"
              label="Projects"
              path="/projects"
            />
            <CardItem
              src={Contact}
              text="Contact"
              label="Contact"
              path="/contact"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
