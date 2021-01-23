import React from "react";

const Search = () => {
  return (
    <>
          <div className="field">
            <div className="control">
              <input
                className="input is-danger"
                type="text"
                name="search"
                placeholder="Search"
              />
            </div>
          </div>
    </>
  );
};

export default Search;
