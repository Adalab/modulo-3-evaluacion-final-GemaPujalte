import React from "react";
import "../stylesheets/App.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <>
      <Link to={`/character-detail/${props.id}`} className="link">
        <article>
          <img
            src={props.image}
            title={props.name}
            alt={`Este personaje es : ${props.name} `}
          />
          <h3>{props.name}</h3>
          <p>{props.species}</p>
        </article>
      </Link>
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
