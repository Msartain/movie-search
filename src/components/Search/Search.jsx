import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Search.css';


const MovieSearch = (props) => {
  return (
    <div className="movie-search">
      <InputGroup className="mb-3">
        <FormControl
          onChange={(e) => props.handleOnChange(e)}
          placeholder="Movie Name"
          aria-label="Movie Name"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
        <Link to='/results'>
          <Button onClick={props.handleOnClick} variant="outline-secondary">
            Search
          </Button>
        </Link>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default MovieSearch;
