"use client";

import { useRouter } from "next/navigation";

export default function PaginationControls({ currentPage, totalPages }) {
  const router = useRouter();

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="p-2 border-2 border-black"
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="p-2 border-2 border-black"
        >
          Next
        </button>
      </div>
      <p>Page: {currentPage}</p>
    </div>
  );
}
