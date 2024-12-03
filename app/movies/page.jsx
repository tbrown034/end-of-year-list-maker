import SearchList from "./components/SearchList";
import FullList from "./components/FullList";
import SearchBar from "./components/SearchBar";

export default async function MoviesPage({
  searchParams: searchParamsPromise,
}) {
  const searchParams = await searchParamsPromise; // Await the promise
  const query = searchParams?.query || ""; // Extract query from URL

  return (
    <main className="flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold">Movies</h1>
        <h3 className="text-xl">Select Your Top Movies</h3>
      </div>
      {/* Search */}
      <section className="p-2 border-2 border-black rounded-xl">
        <h2 className="text-xl font-bold">Search Movies</h2>
        <div className="flex">
          <SearchBar query={query} />
        </div>
        {query && (
          <div className="">
            <SearchList searchParams={searchParams} />
          </div>
        )}
      </section>
      {/* Top Movies */}
      <section className="p-2 border-2 border-black rounded-xl">
        <h2 className="text-xl font-bold">Most Popular</h2>
        <FullList searchParams={searchParams} />
      </section>
    </main>
  );
}
