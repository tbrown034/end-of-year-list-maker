export default async function MovieDetailsPage({ params }) {
  const { id } = params;

  const fetchMovieDetails = async (movieId) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api?id=${movieId}`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movie details: ${response.status}`);
    }

    return response.json();
  };

  let movie;

  try {
    movie = await fetchMovieDetails(id);
  } catch (error) {
    return (
      <section className="p-8">
        <h1 className="text-2xl font-bold text-red-600">
          Error Loading Movie Details
        </h1>
        <p className="text-white">{error.message}</p>
      </section>
    );
  }

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="mb-4 text-gray-400">{movie.tagline}</p>
      <p>{movie.overview}</p>
      <ul className="mt-4">
        <li>
          <strong>Release Date:</strong> {movie.release_date}
        </li>
        <li>
          <strong>Runtime:</strong> {movie.runtime} minutes
        </li>
        <li>
          <strong>Rating:</strong> {movie.vote_average} / 10
        </li>
      </ul>
    </section>
  );
}
