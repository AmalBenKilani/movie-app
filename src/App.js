import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import MovieDescription from "./Components/MovieDescription";





function App() {
 const moviesArray=([
    {
      id: 1,
      title: "Lara Croft: Tomb Raider",
      rate: 5,
      year: 2001,
      description:
        "Video game adventurer Lara Croft comes to life in a movie where she races against time and villains to recover powerful ancient artifacts.",
      img: "https://i.pinimg.com/originals/1f/fb/7b/1ffb7bf9849eb6a0f216290e302bf647.jpg",
      trailer: <iframe width="560" height="315" src="https://www.youtube.com/embed/VlCylyAKpGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    },
    {
      id: 2,
      title: "Avengers",
      rate: 4,
      year: 2012,
      description:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki from enslaving humanity.",
      img: "https://i.pinimg.com/originals/7a/94/80/7a94808dbb3a9a6d922d0780bc9be03d.jpg",
      trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/eOrNdBpGMv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    },
    {
      id: 3,
      title: "Spider-Man: Into the Spider-Verse",
      rate: 2,
      year: 2018,
      description:
        "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      img: "https://wallpapercave.com/wp/wp6173954.jpg",
      trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/g4Hbz2jLxvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    },
    {
      id: 4,
      title: "Call of the Wild",
      rate: 3,
      year: 2020,
      description:
        "Buck is a big-hearted dog whose blissful domestic life gets turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Alaskan Yukon in the 1890s. ",
      img: "https://fffmovieposters.com/wp-content/uploads/11958.jpg",
      trailer:<iframe width="560" height="315" src="https://www.youtube.com/embed/5P8R2zAhEwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    },
  ]);

  return (
    <>

      <Routes>
        <Route path='/' element={<Home  moviesArray={moviesArray} />} />
        <Route path="/moviedescription/:id" element={<MovieDescription moviesArray={moviesArray} />} />
      </Routes>

    </>
  );
}

export default App;
