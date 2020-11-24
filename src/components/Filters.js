import React from "react";

const Filters = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
  };

  //prevent error when pressing enter
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Filtrar por nombre</label>
      <input type="text" id="name" onChange={handleFilter} />
    </form>
  );
};

export default Filters;
