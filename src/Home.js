import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList";
import FormInput from "./Components/FormInput";
import Filter from "./Components/Filter";



const Home = (props) => {
    const [movies, setMovies] = useState(props.moviesArray);
    const [newMovie, setnewMovie] = useState({
        title: "",
        rate: "",
        year: "",
        description: "",
        img: "",
    });
    const [searchTitle, setSearchTitle] = useState("");
    const [newRating, setNewRating] = useState("");
    const handleChange = (e) => {
        setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };

    const addNewMovie = () => {
        setMovies([...movies, newMovie]);
        
    };


    const handleInputTitle = (e) => {
        setSearchTitle(e.target.value);
    };
    const handleSearchTitle = () => {
        setMovies(
            movies.filter(
                (movie) =>
                    movie.title.toLocaleLowerCase() === searchTitle.toLocaleLowerCase()
            )
        );
    };
    const ratingChanged = (newRating) => {
        setNewRating(newRating);
        setMovies(movies.filter((movie) => movie.rate <= newRating));
    };
    return (
        <div className="App">
            <div className="input">
                <FormInput handleChange={handleChange} addNewMovie={addNewMovie} />
            </div>

            <Filter
                handleInputTitle={handleInputTitle}
                handleSearchTitle={handleSearchTitle}
                ratingChanged={ratingChanged}
            />
            <div className="movies">
                <MovieList movies={movies} />

            </div>
        </div>
    )

}
export default Home