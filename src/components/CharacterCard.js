import React from "react";
import "../stylesheets/App.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <>
      <article>
        <Link to={`/character-detail/${props.id}`} className="link">
          <img
            src={props.image}
            title={props.name}
            alt={`This character is : ${props.name} `}
          />
        </Link>

        <h3>{props.name}</h3>
        <p>{props.species}</p>
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
