import React from "react";
import "./cardStyles.css";

/**
 * Card Component that renders a specific card
 */

const Card = (props) => {
  return (
    <div className="card" onClick={props.handleClick}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
