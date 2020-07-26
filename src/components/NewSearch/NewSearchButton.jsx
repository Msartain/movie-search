import React from "react";
import { Link } from "react-router-dom";
import './NewSearchButton.css';

const NewSearchButton = (props) => {
    return (
        <div className = "new-search">
            <Link to='/search'>New Search</Link>
        </div>
    )
}

export default NewSearchButton;