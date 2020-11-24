import React from "react";

const CharacterDetail = (props) => {
  return (
    <>
      <article>
        <img src={props.img} alt={`Este personaje es : ${props.name} `} />
        <h2>{`Name: ${props.name}`}</h2>
        <p>Status: {props.status}</p>
        <p> Species: {props.species}</p>
        <p>Origin: {props.origin}</p>
        <p>Episodes: {props.episode}</p>
      </article>
    </>
  );
};

export default CharacterDetail;
