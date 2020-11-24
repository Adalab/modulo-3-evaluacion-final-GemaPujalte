import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const charactersItems = props.characters.map((character) => {
    console.log(character.image);

    return (
      <CharacterCard
        key={character.id}
        image={character.image}
        name={character.name}
        species={character.species}
      />
    );
  });
  return (
    <div>
      Holaaaaa
      <section>{charactersItems}</section>
    </div>
  );
};

export default CharacterList;
