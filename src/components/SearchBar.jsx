import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import fetching from "./Api";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  let navigate = useNavigate()
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetching(inputValue);
    console.log(response);
    if (response) {
      console.log(response);
      onSearch(inputValue, response);
    } else {
      console.log("error loading");
    }
    setInputValue("");
    console.log(inputValue);
    navigate(`/overview/`);
  };

  const handleChange = async (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
    try {
      let response = await fetch(
        `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`
      );
      // console.log(response)
      let data = await response.json();
      // console.log(data.top_gainers);
      let finalData = data.top_gainers.filter((m) => {
        return m.ticker
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      console.log(finalData);
      console.log(event.target.value.length);
      if (event.target.value.length > 0) {
        console.log("filteredData:", finalData);
        setFilteredData(finalData);
      } else {
        console.log("No results found");
        setFilteredData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <div className="mainContainer">
        <div className="Search-container">
          
            <form onSubmit={handleSubmit}>
            <div className="input-format">
              <input
                type="text"
                placeholder="Search..."
                id="input-text"
                value={inputValue}
                onChange={handleChange}
              />
              <FaMagnifyingGlassDollar />
              </div>
              <div>
              <button type="submit" className="search-button">
                Search
              </button>
              </div>
            </form>
        </div>
      </div>
      <div className="filter-text">
        {filteredData.length > 0
          ? filteredData.map((item) => <p key={item.ticker}>{item.ticker}</p>)
          : filteredData == []}
      </div>
    </div>
  );
};

export default SearchBar;
