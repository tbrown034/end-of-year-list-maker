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
    <section className="flex flex-col gap-4">
      <PaginationControls currentPage={currentPage} totalPages={totalPages} />
      <ul className="list-disc list-inside ">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link className="hover:font-bold" href={`/movies/${movie.id}`}>
              {movie.title}
            </Link>{" "}
          </li>
        ))}
      </ul>
    </section>
  );
}
