"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Spinner from "@/components/shared/spinner";
import SearchResults from "@/components/search/results";
import Filter from "@/components/filter";
import { filterKombuchas } from "@/lib/utils";
import { useSearchKombuchas } from "@/lib/hooks/api";
import { FilterOptionsByCateg } from "@/types/kombucha";

const Search = () => {
  const [selectedFilterOptions, setSelectedFilterOptions] =
    useState<FilterOptionsByCateg>({
      types: [],
      flavors: [],
    });

  const router = useRouter();
  const search = useSearchParams();

  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  const { kombuchas, isLoading } = useSearchKombuchas({
    searchQuery: encodedSearchQuery,
  });

  if (!encodedSearchQuery) router.push("/");
  if (isLoading) return <Spinner />;
  if (!kombuchas) return null;

  const filteredKombuchas = filterKombuchas(kombuchas, selectedFilterOptions);

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        {!kombuchas ? (
          <p className="text-xl">
            Results for: <span className="font-semibold">{searchQuery}</span>
          </p>
        ) : (
          <Filter
            selectedFilterOptions={selectedFilterOptions}
            setSelectedFilterOptions={setSelectedFilterOptions}
            kombuchas={kombuchas}
          />
        )}
      </div>
      <SearchResults kombuchas={filteredKombuchas} />
    </>
  );
};

export default Search;
