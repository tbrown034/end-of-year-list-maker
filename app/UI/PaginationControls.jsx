"use client";

import { useRouter } from "next/navigation";

export default function PaginationControls({ currentPage, totalPages }) {
  const router = useRouter();

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      const params = new URLSearchParams(window.location.search);
      params.set("page", newPage);
      router.push(`?${params.toString()}`);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4 space-x-4">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-black rounded disabled:opacity-50"
      >
        Previous
      </button>

      {/* Current Page Indicator */}
      <span className="text-sm ">
        Page {currentPage} / {totalPages}
      </span>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-black rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
