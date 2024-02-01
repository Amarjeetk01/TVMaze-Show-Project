import React, { useState } from "react";
import logo from "../../public/logo.png";
import { useNavigate } from "react-router-dom";

export const Header = ({setSearchValue} ) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.length > 0) {
      setSearchValue(query);
      setQuery('');
      navigate('/');
    }
  };

  const searchQueryHandler = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && query.length > 0) {
      setSearchValue(query);
      setQuery('');
      navigate('/');
    }
  };
  // console.log(query)

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <span
            className="navbar-brand header"
            onClick={() => {
              setSearchValue('all');
              navigate('/');
            }}
          >
            <img src={logo} alt="Logo" height="30" /> Show
          </span>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
