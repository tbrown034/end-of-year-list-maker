import Link from "next/link";

export default async function SearchList({ searchParams }) {
  const query = searchParams?.query || ""; // Get the query from searchParams

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api?query=${query}`,
    { cache: "no-store" } // Correct the path
  );

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  const data = await response.json();

  return (
    <section className="">
      <ul className="mb-4 list-disc list-inside">
        {data.movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>{" "}
          </li>
        ))}
      </ul>
    </section>
  );
}
