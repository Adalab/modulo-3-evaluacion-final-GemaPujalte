import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import api from "../services/api";
import CharacterList from "./CharacterList";
import { Switch, Route } from "react-router-dom";

const App = () => {
  //state
  const [characters, setCharacters] = useState([]);
  const [filterText, setFilterText] = useState("");

  //api
  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacters(data); //guardo el array con todos los datos
    });
  }, []);

  //events
  const handleFilter = (filterText) => {
    setFilterText(filterText);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterText.toLowerCase());
  });
  console.log(filteredCharacters);

  return (
    <div>
      <header></header>
      <main>
        <CharacterList
          characters={filteredCharacters}
          handleFilter={handleFilter}
        />
      </main>
    </div>
  );
};

export default App;
