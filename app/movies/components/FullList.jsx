// movies/components/FullList.jsx
import Link from "next/link";
import PaginationControls from "@/app/UI/PaginationControls";
export default async function FullList({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || "1", 10);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api?page=${currentPage}`,
    { cache: "no-store" }
  );
  const data = await response.json();

  const { movies, totalPages } = data;

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold">Top Movies by Votes</h1>
      <ul className="mb-4 list-disc list-inside">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>{" "}
          </li>
        ))}
      </ul>
      <PaginationControls currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}
