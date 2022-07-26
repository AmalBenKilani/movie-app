import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';

const MovieDescription = (props) => {
    const {id} = useParams();
    
    return (
        <div>
            <Link to="/">Home</Link>

            <h3>Description and Trailer of the Movie : </h3>

            <Card.Text id="movieDesc"> {props.moviesArray.filter((movie) => movie.id == id).map(movie=><div>{movie.description}  {movie.trailer}</div> )}</Card.Text>

        </div>
    );
};
export default MovieDescription;
