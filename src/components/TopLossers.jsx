import React, { useEffect, useState } from "react";
import "./TopLossers.css";
import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TopLossers = ({ onClick }) => {

  let navigate = useNavigate()
  const [topLosers, setTopLosers] = useState([]);

  const handleLossGainer = async () => {
    try {
      let data = await fetch(
        `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`
      );
      console.log(data);

      let response = await data.json();
      console.log(response);
      let finalData = response.top_losers.map((m) => {
        return {
          name: m.ticker,
          price: m.price,
          changePercent: m.change_percentage,
          changeAmount: m.change_amount,
        };
      });

      console.log(finalData);
      setTopLosers(finalData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleLossGainer();
  }, []);

  const handleClickView = (value) => {
    console.log(value)
    onClick(value)
    navigate('/overview');
  };

  return (
    <div className="container">
      <div className="top-container">
        <div className="top-container2">
          {topLosers.map((loser) => (
            <div
              key={loser.name}
              className="loss-container"
              onClick={()=>handleClickView(loser.name)}
            >
              <h3>{loser.name}</h3>
              <p>Price: {loser.price}</p>
              <p>
                Change Percent: {loser.changePercent}
                <span className="losser_icon">
                  <FaCaretDown />
                </span>
              </p>
              <p>
                Change Amount: {loser.changeAmount}{" "}
                <span className="losser_icon">
                  <FaCaretDown />
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopLossers;
