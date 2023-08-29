"use client";

import { useState } from "react";
import SearchCard from "@/components/search/card";
import { useDemoModal } from "@/components/search/kombucha-modal";
import { KombuchaSearchResult } from "@/types/kombucha";

interface SearchResultsProps {
  kombuchas?: KombuchaSearchResult[];
}

const SearchResults = ({ kombuchas }: SearchResultsProps) => {
  const [selectedKombucha, setSelectedKombucha] =
    useState<KombuchaSearchResult | null>(null);
  const { KombuchaModal, setShowModal } = useDemoModal(selectedKombucha);

  const handleModalOpen = (kombucha: KombuchaSearchResult) => {
    setSelectedKombucha(kombucha);
    setShowModal(true);
  };

  if (!kombuchas) return null;

  return (
    <>
      <KombuchaModal />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {kombuchas.map((kombucha, idx) => (
          <SearchCard
            key={idx}
            kombucha={kombucha}
            handleModalOpen={handleModalOpen}
          />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
