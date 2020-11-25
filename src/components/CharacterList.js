import React from "react";
import "../stylesheets/CharacterList.scss";
import CharacterCard from "./CharacterCard";
import Filters from "./Filters";
import ReturnsError from "./ReturnsError";

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return <ReturnsError />;
  } else {
    const charactersItems = props.characters.map((character, index) => {
      return (
        <CharacterCard
          key={index}
          id={character.id}
          title={character.name}
          image={character.image}
          name={character.name}
          species={character.species}
        />
      );
    });
    return (
      <div>
        <Filters
          filterText={props.filterText}
          handleFilter={props.handleFilter}
        />
        <section className="cardList">{charactersItems}</section>
      </div>
    );
  }
};

export default CharacterList;
