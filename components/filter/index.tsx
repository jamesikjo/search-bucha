import FilterDropdown from "@/components/filter/dropdown";
import { FilterOptionsByCateg, KombuchaSearchResult } from "@/types/kombucha";
import { aggregateCounts } from "@/lib/utils";

type setFilterOptions = React.Dispatch<
  React.SetStateAction<FilterOptionsByCateg>
>;

interface FilterDropdownProps {
  selectedFilterOptions: FilterOptionsByCateg;
  setSelectedFilterOptions: setFilterOptions;
  kombuchas: KombuchaSearchResult[];
}

const Filter = ({
  selectedFilterOptions,
  setSelectedFilterOptions,
  kombuchas,
}: FilterDropdownProps) => {
  // Get the count of each filterable option item to display when filter dropdown is shown
  const { typeCounts, flavorCounts } = aggregateCounts(kombuchas);

  const updateFilter = (
    category: keyof FilterOptionsByCateg,
    value: string,
  ) => {
    setSelectedFilterOptions((prevFilters: FilterOptionsByCateg) => {
      let updatedFilter = prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value];

      return {
        ...prevFilters,
        [category]: updatedFilter as any,
      };
    });
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        <FilterDropdown
          filterLabel="Kombucha Type"
          filterCounts={typeCounts}
          selectedFilterOptions={selectedFilterOptions["types"]}
          updateFilter={(value: string) => updateFilter("types", value)}
        />
        <FilterDropdown
          filterLabel="Flavors"
          filterCounts={flavorCounts}
          selectedFilterOptions={selectedFilterOptions["flavors"]}
          updateFilter={(value: string) => updateFilter("flavors", value)}
        />
      </div>
      <button
        className="rounded-md bg-gray-100 px-4 py-1.5 text-xs font-medium text-black dark:bg-amber-600 dark:text-white"
        onClick={() => setSelectedFilterOptions({ types: [], flavors: [] })}
      >
        Clear Filter
      </button>
    </>
  );
};

export default Filter;
