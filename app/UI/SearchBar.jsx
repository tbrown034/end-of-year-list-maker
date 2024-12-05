"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({ query, onQueryChange }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    router.push(`${pathname}?${params.toString()}`);
    onQueryChange(term);
  }, 300);

  return (
    <input
      type="text"
      className="w-full p-2 text-black border rounded-md"
      placeholder="Search movies..."
      defaultValue={query}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
