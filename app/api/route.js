import { NextResponse } from "next/server";

export async function GET() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  const token = process.env.TMDM_API_KEY;

  if (!token) {
    console.error("Missing TMDB API key");
    return NextResponse.json(
      { error: "API Key is missing. Check your .env.local file." },
      { status: 500 }
    );
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
      throw new Error(`Failed to fetch movies: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({ movies: data.results });
  } catch (error) {
    console.error(`[ERROR]: ${error.message}`);
    return NextResponse.json(
      { error: "Failed to fetch movies from TMDB." },
      { status: 500 }
    );
  }
}
