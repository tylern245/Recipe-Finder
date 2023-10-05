import {BsSearch} from "react-icons/bs";
import {SearchBar} from './SearchBar.jsx';
import '../assets/css/Body.css';

function Body() {
    return (
        <div className="Body">
            <div className="search-bar-container"><h3>Recipe Finder</h3><SearchBar/></div>
        </div>
    );
}

export default Body;