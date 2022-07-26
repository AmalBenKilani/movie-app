import React from "react";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './MovieCard.css'





const MovieCard = (props) => {

    return (
        <Card id="movieCard">
            <Card.Img id="movieImg" variant="top" src={props.movie.img} />
            <Card.Body id="cardBody" >
                <Card.Title id="movieTitle">{props.movie.title}</Card.Title>
                <Card.Text id="movieDesc" >
                    {props.movie.description}
                </Card.Text>

            </Card.Body>
            <Link to={`/moviedescription/${props.movie.id}`}>See More</Link>
          
        </Card>

    )
}



export default MovieCard;