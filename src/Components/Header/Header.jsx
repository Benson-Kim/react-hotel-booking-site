import "./header.css"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Header = ({type}) => {

    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        rooms: 1,
    });

    const navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        navigate("/hotels",{state:{destination,date,options}})
    }

    return (
        <div className="header">
            <div className={type === "list" ? "header-container listMode" : "header-container"}>
                <div className="header-list">
                    <div className="list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="list-item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="list-item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="list-item">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" && <>
                    <h1 className="header-title">There is no one who loves pain itself, who seeks after it and wants to have it</h1>
                    <p className="header-description">In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                    <button className="header-btn">Sign in / Register</button>
                    <div className="search-form">
                        <div className="item">
                            <FontAwesomeIcon icon={faBed} className="header-icon" />
                            <input type="text" placeholder="Where are you going?" className="search-input" onChange={(e)=>setDestination(e.target.value)} />
                        </div>
                        <div className="item">
                            <FontAwesomeIcon icon={faCalendarDays} className="header-icon" />
                            <span onClick={() => setOpenDate(!openDate)} className="search-text">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                            />}
                        </div>
                        <div className="item">
                            <FontAwesomeIcon icon={faPerson} className="header-icon" />
                            <span onClick={() => setOpenOptions(!openOptions)} className="search-text">{`${options.adult} adult . ${options.children} children . ${options.rooms} rooms`}</span>
                            {openOptions && <div className="options">
                                <div className="option-item">
                                    <span className="option-text">Adults</span>
                                    <div className="option-counter">
                                        <button className="btncounter" disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
                                        <span className="option-number">{options.adult}</span>
                                        <button className="btncounter" onClick={() => handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span className="option-text">Children</span>
                                    <div className="option-counter">
                                        <button className="btncounter" disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                                        <span className="option-number">{options.children}</span>
                                        <button className="btncounter" onClick={() => handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span className="option-text">Rooms</span>
                                    <div className="option-counter">
                                        <button className="btncounter" disabled={options.rooms <= 1} onClick={() => handleOption("rooms", "d")}>-</button>
                                        <span className="option-number">{options.rooms}</span>
                                        <button className="btncounter" onClick={() => handleOption("rooms", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                        <div className="item">
                            <button className="header-btn" onClick={()=>handleSearch()}>Search</button>
                        </div>
                    </div>
                </>}
            </div>
        </div>
    )
}
