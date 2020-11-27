import React from "react";
import "../stylesheets/Filters.scss";

const Filters = (props) => {
  const handleFilter = (ev) => {
    const data = {
      id: ev.target.id,
      value: ev.target.value,
    };
    props.handleFilter(data);
  };

  //prevent error when pressing enter
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label htmlFor="name"></label>
      <input
        className="form__input"
        type="text"
        id="name"
        placeholder="Who are you looking for?"
        value={props.filterText} //control filter input
        onChange={handleFilter}
      />

      <label htmlFor="episodes"></label>

      <input
        type="number"
        id="episodes"
        value={props.filterEpisodes}
        onChange={handleFilter}
      />
    </form>
  );
};

export default Filters;
