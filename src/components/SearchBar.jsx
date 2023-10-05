import React, {useState} from "react";
import {BsSearch} from "react-icons/bs";
import "./SearchBar.css";

export const SearchBar = () => {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        
    }

    return (
        <div className="input-container">
            <BsSearch id="search-icon"/>
            <input className="search-bar" placeholder="Ingredient or recipe"
            value={input} onChange={(e) => setInput(e.target.value)}/>
        </div>
    );
};
