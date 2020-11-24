import React from "react";
import CharacterCard from "./CharacterCard";
import Filters from "./Filters";

const CharacterList = (props) => {
  const charactersItems = props.characters.map((character) => {
    console.log(character.image);

    return (
      <CharacterCard
        key={character.id}
        title={character.name}
        image={character.image}
        name={character.name}
        species={character.species}
      />
    );
  });
  return (
    <div>
      <Filters handleFilter={props.handleFilter} />
      <section>{charactersItems}</section>
    </div>
  );
};

export default CharacterList;
