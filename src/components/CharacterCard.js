import React from "react";
import "../stylesheets/CharacterCard.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <>
      <article className="character-list">
        <Link to={`/character-detail/${props.id}`} className="link">
          <img
            className="card__img"
            src={props.image}
            title={props.name}
            alt={`This character is : ${props.name} `}
          />
        </Link>

        <div className="card__info">
          <h3>{props.name}</h3>
          <p>{props.species}</p>
        </div>
      </article>
    </>
  );
};

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};

export default CharacterCard;
