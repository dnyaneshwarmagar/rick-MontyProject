import React from "react";

const Search = ({ getList }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a Contact"
        style={{ width: "80vw" }}
        onChange={(e) => getList(e.target.value,1)}
      />
    </div>
  );
};

export default Search;
