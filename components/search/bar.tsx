"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const SearchBar = () => {
  const search = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : "",
  );

  useEffect(() => {
    // Clear the search bar if the user navigates back to home
    if (pathname === "/") {
      setSearchQuery("");
    }
  }, [pathname]);

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (typeof searchQuery !== "string") {
      return;
    }

    const trimmedQuery = searchQuery.trim();

    const encodedSearchQuery = encodeURI(trimmedQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };

  return (
    <form onSubmit={onSearch} className="w-full">
      <label
        htmlFor="kombucha-search"
        className="sr-only mb-2 text-sm font-medium"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-4 w-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="kombucha-search"
          value={searchQuery || ""}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm focus:border-amber-500 focus:ring-amber-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
          placeholder="Search by name, flavor, brewery..."
          required
        />
        <button
          type="submit"
          className="absolute bottom-2.5 right-2.5 rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-500"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
