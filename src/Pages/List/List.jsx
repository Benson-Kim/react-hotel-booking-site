import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";

import Navbar from "../../Components/Navbar/Navbar";
import { Header } from "../../Components/Header/Header";
import "./list.css";
import { DateRange } from "react-date-range";
import Search from "../../Components/Search/Search";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [opendate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1>Search</h1>
            <div className="list-item">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="list-item">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!opendate)}>
                {`
                  ${format(date[0].startDate, "MM/dd/yyyy")} to
                  ${format(date[0].endDate, "MM/dd/yyyy")}
                `}
                {opendate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </span>
            </div>
            <div className="list-item">
              <label>Options</label>
              <div className="list-option-wrapper">
                <div className="list-option">
                  <span>
                    Min Price<small>per night</small>
                  </span>
                  <input type="number" />
                </div>
                <div className="list-option">
                  <span>
                    Max Price<small>per night</small>
                  </span>
                  <input type="number" />
                </div>
                <div className="list-option">
                  <span>Adults</span>
                  <input type="number" min={1} placeholder={options.adult} />
                </div>
                <div className="list-option">
                  <span>Children</span>
                  <input type="number" min={0} placeholder={options.children} />
                </div>
                <div className="list-option">
                  <span>Rooms</span>
                  <input type="number" min={1} placeholder={options.rooms} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="list-result">
             <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
