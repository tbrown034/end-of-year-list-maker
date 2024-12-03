"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({ query }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Debounced handler for updating the query
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term); // Add or update the query
    } else {
      params.delete("query"); // Remove the query if it's empty
    }

    router.push(`${pathname}?${params.toString()}`); // Update the URL
  }, 300);

  return (
    <input
      type="text"
      className="w-full p-2 text-black border rounded-md"
      placeholder="Search movies..."
      defaultValue={query} // Display the current query in the input field
      onChange={(e) => handleSearch(e.target.value)} // Trigger search on input change
    />
  );
}
