import React from "react";

const CharacterCard = (props) => {
  return (
    <article>
      <img src={props.image} alt={`Este personaje es : ${props.name} `} />
      <h3>{props.name}</h3>
      <p>{props.species}</p>
    </article>
  );
};

export default CharacterCard;
