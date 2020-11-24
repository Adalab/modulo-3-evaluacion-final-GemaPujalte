import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import api from "../services/api";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

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

  //filters
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterText.toLowerCase());
  });

  const renderDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find((character) => {
      return routeCharacterId === parseInt(character.id);
    });

    if (foundCharacter) {
      return (
        <CharacterDetail
          img={foundCharacter.image}
          name={foundCharacter.name}
          status={foundCharacter.status}
          species={foundCharacter.species}
          origin={foundCharacter.origin.name}
          episode={foundCharacter.episode.length}
        />
      );
    } else {
      return <p>Personaje no encontrado</p>;
    }
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <CharacterList
            characters={filteredCharacters}
            handleFilter={handleFilter}
          />
        </Route>
        <Route path="/character-detail/:id" component={renderDetail} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
};

export default App;
