"use client";

import React, { useState } from "react";
import SearchSection from "./components/SearchSection";
import FullList from "./components/FullList";
import UserList from "./components/UserList";

export default function MoviesPage({ searchParams }) {
  const query = searchParams?.query || ""; // Extract query from URL
  const page = parseInt(searchParams?.page || "1", 10);

  const [userMovies, setUserMovies] = useState([]);

  // Add a movie to the user's list
  const addMovie = (movie) => {
    if (userMovies.some((m) => m.id === movie.id)) {
      alert(`${movie.title} is already in your list!`);
      return;
    }
    if (userMovies.length >= 10) {
      alert("You can only add up to 10 movies.");
      return;
    }
    setUserMovies((prev) => [...prev, movie]);
  };

  // Remove a movie from the user's list
  const removeMovie = (movieId) => {
    setUserMovies((prev) => prev.filter((m) => m.id !== movieId));
  };

  // Move a movie up in the user's list
  const moveUp = (index) => {
    if (index === 0) return;
    const newMovies = [...userMovies];
    [newMovies[index - 1], newMovies[index]] = [
      newMovies[index],
      newMovies[index - 1],
    ];
    setUserMovies(newMovies);
  };

  // Move a movie down in the user's list
  const moveDown = (index) => {
    if (index === userMovies.length - 1) return;
    const newMovies = [...userMovies];
    [newMovies[index + 1], newMovies[index]] = [
      newMovies[index],
      newMovies[index + 1],
    ];
    setUserMovies(newMovies);
  };

  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Movies</h1>
        <h3 className="text-xl">Select Your Top Movies</h3>
      </div>

      <SearchSection onAddMovie={addMovie} />
      <section className="p-2 border-2 border-black rounded-xl">
        <h2 className="text-xl font-bold">Most Popular</h2>
        <FullList searchParams={searchParams} onAddMovie={addMovie} />
      </section>
      <section className="p-2 border-2 border-black rounded-xl">
        <h2 className="text-xl font-bold">Your Top Movies</h2>
        <UserList
          movies={userMovies}
          onRemoveMovie={removeMovie}
          onMoveUp={moveUp}
          onMoveDown={moveDown}
        />
      </section>
    </main>
  );
}
