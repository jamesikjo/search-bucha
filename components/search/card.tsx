import { KombuchaSearchResult } from "@/types/kombucha";
import getCloudinaryUrl from "@/lib/getCloudinaryUrl";
import { FlavorChips } from "@/components/shared/chips";

interface SearchCardProps {
  kombucha: KombuchaSearchResult;
  handleModalOpen: (kombucha: KombuchaSearchResult) => void;
}

const SearchCard = ({ kombucha, handleModalOpen }: SearchCardProps) => {
  return (
    <div className="flex flex-col rounded-lg border-[1px] p-4">
      <button onClick={() => handleModalOpen(kombucha)}>
        <div className="flex items-center gap-2">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src={getCloudinaryUrl(kombucha.image || "")}
            alt={`${kombucha.name}-image`}
            className="h-[75px] w-[75px]"
          />
          <div className="flex flex-col items-start">
            <p className="text-start text-lg font-medium">{kombucha.name}</p>
            <p className="text-md text-gray-700 dark:text-gray-400">
              {kombucha.brewery.name}
            </p>
          </div>
        </div>
      </button>
      <hr className="my-3" />
      <div className="flex flex-col flex-wrap items-start justify-between px-2 md:flex-row md:items-center">
        <p className="mb-2 text-xs font-medium md:mb-0">{kombucha.type}</p>
        <FlavorChips flavors={kombucha.flavorToKombuchaConnection} />
      </div>
    </div>
  );
};

export default SearchCard;
