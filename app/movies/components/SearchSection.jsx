"use client";

import React, { useState } from "react";
import SearchBar from "@/app/UI/SearchBar";
import SearchList from "./SearchList";

export default function SearchSection({ onAddMovie }) {
  const [query, setQuery] = useState("");

  return (
    <section className="p-2 border-2 border-black rounded-xl">
      <h2 className="text-xl font-bold">Search Movies</h2>
      <SearchBar query={query} onQueryChange={setQuery} />
      <SearchList query={query} onAddMovie={onAddMovie} />
    </section>
  );
}
