"use client";

import React, { useState } from "react";
import UserListControls from "@/app/UI/UserListControls";

const initialDummyList = [
  "Movie 1",
  "Movie 2",
  "Movie 3",
  "Movie 4",
  "Movie 5",
  "Movie 6",
  "Movie 7",
  "Movie 8",
  "Movie 9",
  "Movie 10",
];

const UserList = () => {
  const [movies, setMovies] = useState(initialDummyList);

  // Move a movie up
  const moveUp = (index) => {
    if (index === 0) return; // Already at the top
    const newMovies = [...movies];
    [newMovies[index - 1], newMovies[index]] = [
      newMovies[index],
      newMovies[index - 1],
    ]; // Swap
    setMovies(newMovies);
  };

  // Move a movie down
  const moveDown = (index) => {
    if (index === movies.length - 1) return; // Already at the bottom
    const newMovies = [...movies];
    [newMovies[index], newMovies[index + 1]] = [
      newMovies[index + 1],
      newMovies[index],
    ]; // Swap
    setMovies(newMovies);
  };

  // Remove a movie
  const removeMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index); // Remove by index
    setMovies(newMovies);
  };

  return (
    <section className="mt-4">
      <ol className="list-decimal list-inside">
        {movies.map((movie, index) => (
          <li
            key={index}
            className="flex items-center gap-4 hover:font-bold group"
          >
            <span>{movie}</span>
            {/* Add UserListControls for each item */}
            <div className="transition opacity-75 group-hover:opacity-100">
              <UserListControls
                onMoveUp={index > 0 ? () => moveUp(index) : null} // Disable if at the top
                onMoveDown={
                  index < movies.length - 1 ? () => moveDown(index) : null
                } // Disable if at the bottom
                onRemove={() => removeMovie(index)}
              />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default UserList;
