"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { KombuchaSearchResult } from "@/types/kombucha";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useSearchKombuchas({ searchQuery }: { searchQuery: string }) {
  const [url, setUrl] = useState<string | null>(null);
  const { data, error } = useSWR<KombuchaSearchResult[]>(url, fetcher);

  // Update the SWR key when the searchQuery changes
  useEffect(() => {
    if (searchQuery) {
      setUrl(`/api/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      setUrl(null);
    }
  }, [searchQuery]);

  return {
    kombuchas: data,
    isLoading: !error && !data,
    isError: error,
  };
}
