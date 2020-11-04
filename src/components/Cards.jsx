import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Have a look around and let me know what you think!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/"
              text="Skills"
              label="Skills"
              path="/skills"
            />
            <CardItem
              src="images"
              text="Projects"
              label="Projects"
              path="/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images"
              text="Experience"
              label="Experience"
              path="/experience"
            />
            <CardItem
              src="images"
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
