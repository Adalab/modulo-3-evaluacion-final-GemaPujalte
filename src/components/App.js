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
  const [IsLoading, setIsLoading] = useState(false);
  const [filterEpisodes, setFilterEpisodes] = useState("");

  //api
  useEffect(() => {
    setIsLoading(true);
    api.getDataFromApi().then((data) => {
      setCharacters(data); //guardo el array con todos los datos
      setIsLoading(false);
    });
  }, []);

  //events
  const handleFilter = (data) => {
    if (data.id === "name") {
      setFilterText(data.value);
      console.log("Nombre", filterText);
    } else if (data.id === "episodes") {
      console.log(data.value);

      setFilterEpisodes(data.value);
      console.log("episodes", filterEpisodes);
    }
  };

  //filters;
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterText.toLowerCase());
    })
    .filter((character) => {
      if (filterEpisodes === "") {
        return character;
      }

      return character.episode.length === parseInt(filterEpisodes);
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
    }
  };

  console.log(IsLoading);

  return (
    <div className="App">
      <Header />
      <main className="App__main">
        <Switch>
          <Route exact path="/">
            <CharacterList
              filterEpisodes={filterEpisodes}
              filterText={filterText}
              characters={filteredCharacters}
              handleFilter={handleFilter}
            />
          </Route>
          <Route path="/character-detail/:id" component={renderDetail} />
        </Switch>
      </main>
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
