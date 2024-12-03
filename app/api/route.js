import { NextResponse } from "next/server";

export async function GET(request) {
  const urlParams = new URL(request.url).searchParams;

  // Fetch query parameters
  const id = urlParams.get("id"); // If `id` is present, fetch a specific movie
  const query = urlParams.get("query"); // If `query` is present, perform a search
  const page = urlParams.get("page") || 1; // Default to page 1
  const year = new Date().getFullYear(); // Use the current year
  const sortBy = urlParams.get("sort_by") || "vote_count.desc"; // Default to vote totals

  const token = process.env.TMDM_API_KEY;

  if (!token) {
    console.error("Missing TMDB API key");
    return NextResponse.json(
      { error: "API Key is missing. Check your .env.local file." },
      { status: 500 }
    );
  }

  // Determine the API URL based on the query type
  let url;
  if (id) {
    // Fetch details for a specific movie
    url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  } else if (query) {
    // Perform a search (cannot filter by year directly in the query)
    url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}&page=${page}&include_adult=false&language=en-US`;
  } else {
    // Fetch a list of movies
    url = `https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&sort_by=${sortBy}&page=${page}&include_adult=false&language=en-US`;
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${id ? "movie details" : "movies"}: ${response.status}`
      );
    }

    const data = await response.json();

    // Apply a year filter to search results if needed
    if (query) {
      const filteredMovies = data.results.filter(
        (movie) =>
          movie.release_date && movie.release_date.startsWith(year.toString())
      );

      return NextResponse.json({
        movies: filteredMovies,
        totalPages: Math.ceil(filteredMovies.length / 20), // Update pagination
      });
    }

    // Return appropriate response format
    if (id) {
      return NextResponse.json({ movie: data }); // For single movie
    } else {
      return NextResponse.json({
        movies: data.results,
        totalPages: data.total_pages,
      }); // For movie list
    }
  } catch (error) {
    console.error(`[ERROR]: ${error.message}`);
    return NextResponse.json(
      {
        error: `Failed to fetch ${id ? "movie details" : "movies"} from TMDB.`,
      },
      { status: 500 }
    );
  }
}
