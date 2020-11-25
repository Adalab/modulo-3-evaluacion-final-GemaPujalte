import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetail.scss";

const CharacterDetail = (props) => {
  return (
    <>
      <Link to="/">
        <div className="return__link">
          <span> Back home </span>
        </div>
      </Link>

      <article className="character__detail">
        <img
          className="character__detail--img"
          src={props.img}
          alt={`This character is : ${props.name} `}
        />
        <div className="character__detail--info">
          <h2>{`Name: ${props.name}`}</h2>
          <p className="character__detail--data">Status: {props.status}</p>
          <p> Species: {props.species}</p>
          <p>Origin: {props.origin}</p>
          <p>Episodes: {props.episode}</p>
        </div>
      </article>
    </>
  );
};

export default CharacterDetail;
