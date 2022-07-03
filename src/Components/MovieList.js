import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from "./MovieCard";



const MovieList = (props) => {


    return (
        <>
            {props.movies.map((el) => <MovieCard movie={el} />)}
        </>
    )
}



export default MovieList;