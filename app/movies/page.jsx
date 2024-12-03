// app/movies/page.jsx

export default async function MoviesPage() {
  // Fetch movies from the backend API route
  const fetchMovies = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`, {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch movies: ${response.status}`);
      }
      const data = await response.json();
      return data.movies;
    } catch (error) {
      console.error(`[FETCH ERROR]: ${error.message}`);
      throw error;
    }
  };

  let movies = [];

  try {
    movies = await fetchMovies();
  } catch (error) {
    return (
      <section className="p-8">
        <h1 className="text-2xl font-bold text-red-600">
          Error Loading Movies
        </h1>
        <p className="text-white">{error.message}</p>
      </section>
    );
  }

  // Render movie titles only
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold">Movies</h1>
      <ul className="list-disc list-inside">
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </section>
  );
}
