import React from "react";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import TopGainers from "./components/TopGainers";
import TopLossers from "./components/TopLossers";
import "./App.css";
import StockDisplay from "./components/StockDisplay";

const App = ({ onSearch, onClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isGainer, setIsGainer] = useState(true);
  const [data, setData] = useState(null);

  const handleSearch = (term, response) => {
    setSearchTerm(term);
    onSearch(term);
    console.log(term);
    setData(response);
  };

  const handleClick = (value) => {
    console.log(value);
    onClick(value);
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />

      {/* <StockDisplay data={data} searchTerm={searchTerm} /> */}
      <div className="btn-container">
        <button
          id="top_gainer_btn"
          onClick={() => {
            setIsGainer(true);
            setSearchTerm("");
          }}
          className={isGainer ? "active" : "inactive"}
        >
          Top Gainer
        </button>
        <button
          id="top_losser_btn"
          onClick={() => {
            setIsGainer(false);
            setSearchTerm("");
          }}
          className={!isGainer ? "losser_active" : "inactive"}
        >
          Top Loser
        </button>
      </div>

      {isGainer ? (
        <TopGainers onClick={handleClick} />
      ) : (
        <TopLossers onClick={handleClick} />
      )}
    </div>
  );
};

export default App;
