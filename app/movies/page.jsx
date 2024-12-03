import SearchList from "./components/SearchList";
import FullList from "./components/FullList";
import SearchBar from "../UI/SearchBar";
import UserList from "./components/UserList";

export default async function MoviesPage({
  searchParams: searchParamsPromise,
}) {
  const searchParams = await searchParamsPromise;
  const query = searchParams?.query || ""; // Extract query from URL

  return (
    <main className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Movies</h1>
        <h3 className="text-xl">Select Your Top Movies</h3>
      </div>

      {/* Search Section */}
      <section className="p-2 border-2 border-black rounded-xl">
        <h2 className="text-xl font-bold">Search Movies</h2>
        <SearchBar query={query} />
        {/* SearchList fetches data and renders it server-side */}
        <SearchList query={query} />
      </section>

      {/* Top Movies Section */}
      <section className="p-2 border-2 border-black rounded-xl">
        <h2 className="text-xl font-bold">Most Popular</h2>
        <FullList searchParams={searchParams} />
      </section>
      <section className="p-2 border-2 border-black rounded-xl">
        <h2 className="text-xl font-bold">Your Top Movies</h2>
        <UserList />
      </section>
    </main>
  );
}
