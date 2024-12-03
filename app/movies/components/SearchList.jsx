import Link from "next/link";

export default async function SearchList({ query }) {
  if (!query) return null; // No need to render anything if there's no query

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api?query=${encodeURIComponent(
      query
    )}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data = await response.json();

  return (
    <section className="mt-4">
      <h3 className="mb-2 text-lg font-bold">Search Results</h3>
      {data.movies.length > 0 ? (
        <ul className="list-disc list-inside">
          {data.movies.map((movie) => (
            <li key={movie.id}>
              <Link href={`/movies/${movie.id}`} className="hover:font-bold">
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No results found for "{query}".</p>
      )}
    </section>
  );
}
