"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({ query }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Debounced search handler to minimize requests
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term); // Add or update query
    } else {
      params.delete("query"); // Remove query if empty
    }

    router.push(`${pathname}?${params.toString()}`); // Update URL dynamically
  }, 300);

  return (
    <input
      type="text"
      className="w-full p-2 text-black border rounded-md"
      placeholder="Search movies..."
      defaultValue={query} // Show the current query
      onChange={(e) => handleSearch(e.target.value)} // Trigger handleSearch
    />
  );
}
