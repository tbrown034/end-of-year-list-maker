import PaginationControls from "../UI/PaginationControls";

export default async function MoviesPage({ searchParams }) {
  const currentPage = parseInt((await searchParams)?.page || 1, 10);

  // Fetch movies from the API route
  const fetchMovies = async (page) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api?page=${page}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.status}`);
    }

    const data = await response.json();
    return data;
  };

  let movies = [];
  let totalPages = 1;

  try {
    const data = await fetchMovies(currentPage);
    movies = data.movies;
    totalPages = data.totalPages;
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

  // Render movies with pagination
  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold">Top Movies by Votes</h1>

      <ul className="mb-4 list-disc list-inside">
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>

      {/* Pagination controls */}
      <PaginationControls currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}
