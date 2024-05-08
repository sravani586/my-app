import React from "react";
import "./CardListNew.css";
import Card from "./Card";
import { useHistory } from "react-router-dom";

const data = [
  { title: "Card 1", description: "This is the first card" },
  { title: "Card 2", description: "This is the second card" },
  { title: "Card 3", description: "This is the third card" },
  { title: "Card 4", description: "This is the fourth card" },
  { title: "Card 5", description: "This is the fifth card" },
  { title: "Card 6", description: "This is the sixth card" },
  { title: "Card 7", description: "This is the seventh card" },
  { title: "Card 8", description: "This is the eighth card" },
  { title: "Card 9", description: "This is the ninth card" },
];


/**
 * Card List Component that renders list of cards
 */
const CardListNew = () => {
  const history = useHistory();

  //Function to route to data models page
  const handleClick = () => {
    history.push("/data_models");
  };

  return (
    <div className="card-list">
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default CardListNew;
