import React, { useEffect, useState } from "react";
import { FaCaretUp } from "react-icons/fa";
import "./TopGainers.css";
import { useNavigate } from "react-router-dom";

const TopGainers = ({ onClick }) => {

  let navigate = useNavigate()
  const [topGainers, setTopGainers] = useState([]);
  // const [names, setName] = useState('');
  //   Logo api key = JYK2CoXqH3+PdS7oMk5yyw==tQQVRdKYCcMqtdBX

  const handleClick = async () => {
    try {
      let response = await fetch(
        `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`
      );
      // console.log(response);
      let data = await response.json();
      // console.log(data);
      // console.log(data.top_gainers);

      let finalData = data.top_gainers.map((m) => {
        return {
          name: m.ticker,
          price: m.price,
          changePercent: m.change_percentage,
          changeAmount: m.change_amount,
        };
      });

      
      setTopGainers(finalData);
      // setName(textValue);

      // setName(finalData.name);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    handleClick();
  }, []);

  const handleClickView = (value) => {
    onClick(value)
    navigate('/overview');
  };

  return (
    <div className="container">
      <div className="top-container">
        <div className="top-container2">
          {topGainers.map((gainer) => (
            <div
              key={gainer.name}
              className="gain-conatiner"
              onClick={() => handleClickView(gainer.name)}
            >
              <h3>{gainer.name}</h3>
              <p>Price: ${gainer.price}</p>
              <p>
                Change Percent: {gainer.changePercent}
                <span className="gain_icon">
                  <FaCaretUp />
                </span>
              </p>
              <p>
                Change Amount: ${gainer.changeAmount}
                <span className="gain_icon">
                  <FaCaretUp />
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopGainers;
