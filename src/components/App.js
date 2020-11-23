import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import api from "../services/api";
import CharacterList from "./CharacterList";
import { Switch, Route } from "react-router-dom";

const App = () => {
  //state
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);

  //api
  useEffect(() => {
    api.getDataFromApi(search).then((data) => {
      console.log(data);
      setCharacters(data); //guardo el array con todos los datos
    });
  }, [search]);

  //events
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  return (
    <div>
      <header></header>
      <main>
        <label htmlFor="">Busca!!!</label>
        <input type="text" onChange={handleSearch} />
        <CharacterList characters={characters} />
      </main>
    </div>
  );
};

export default App;
