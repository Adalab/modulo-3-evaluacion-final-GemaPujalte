import React from "react";

const Filters = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
  };
  return (
    <form>
      <label htmlFor="name">Filtrar por nombre</label>
      <input type="text" id="name" onChange={handleFilter} />
    </form>
  );
};

export default Filters;
