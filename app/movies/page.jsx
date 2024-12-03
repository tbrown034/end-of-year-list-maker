import SearchList from "./components/SearchList";
import FullList from "./components/FullList";
import SearchBar from "./components/SearchBar";

export default async function MoviesPage({
  searchParams: searchParamsPromise,
}) {
  const searchParams = await searchParamsPromise; // Await the promise
  const query = searchParams?.query || ""; // Extract query from URL

  return (
    <main className="p-8">
      <h1 className="mb-4 text-3xl font-bold">Movies</h1>

      {/* Search Section */}
      <section className="p-4 mb-6 border border-gray-800 rounded">
        <h2 className="mb-2 text-xl font-bold">Search Movies</h2>
        <SearchBar query={query} />
        <div className="mt-4">
          {query ? (
            <SearchList searchParams={searchParams} />
          ) : (
            <p className="text-gray-400">Start typing to search for movies.</p>
          )}
        </div>
      </section>

      {/* Top Movies Section */}
      <section className="p-4 border border-gray-800 rounded">
        <h2 className="mb-2 text-xl font-bold">Top Movies by Votes</h2>
        <FullList searchParams={searchParams} />
      </section>
    </main>
  );
}
