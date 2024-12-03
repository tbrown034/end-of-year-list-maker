import React from "react";

const dummyList = [
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
  return (
    <section className="mt-4">
      <ol className="list-decimal list-inside">
        {dummyList.map((movie, index) => (
          <li key={index} className="hover:font-bold">
            {movie}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default UserList;
