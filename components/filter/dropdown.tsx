"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Popover from "@/components/shared/popover";
import FilterOptions from "@/components/filter/options";
import useWindowSize from "@/lib/hooks/use-window-size";

interface FilterDropdownProps {
  filterLabel: string;
  filterCounts: { [type: string]: number };
  selectedFilterOptions: Array<string>;
  updateFilter: (value: string) => void;
}

const FilterDropdown = ({
  filterLabel,
  filterCounts,
  selectedFilterOptions,
  updateFilter,
}: FilterDropdownProps) => {
  const [openFilter, setOpenFilter] = useState(false);
  const { isMobile } = useWindowSize();

  const isFlavorAndMobile = isMobile && filterLabel === "Flavors";

  return (
    <>
      <Popover
        align="start"
        content={
          <div
            className={`w-full rounded-md p-3 md:w-[260px]  ${
              isFlavorAndMobile ? "flex max-h-[550px] flex-col flex-wrap" : ""
            }`}
          >
            <FilterOptions
              items={filterCounts}
              selectedFilterOptions={selectedFilterOptions}
              //updateFilter is a function that the parent defines and passes to the child.
              //onItemChange={(type) => ...} is an inline arrow function provided to the child as a prop.
              //Inside this arrow function, we're calling updateFilter, pre-filling the first argument as "types",
              //while the second argument is dynamic, based on the type that comes from the <FilterOptions> when the item changes.
              onFilterOptionChange={updateFilter}
              // The (type) in the arrow function provides a way for child (<FilterOptions>) to pass information back up to FilterDropdown.
            />
          </div>
        }
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
      >
        <button
          onClick={() => setOpenFilter(!openFilter)}
          className="flex items-center justify-between rounded-md border border-gray-300 px-3 py-1 transition-all duration-75"
        >
          <p className="pr-2 text-sm text-gray-600 dark:text-white">
            {filterLabel}
          </p>
          <ChevronDown
            className={`h-4 w-4 text-gray-600 transition-all dark:text-white ${
              openFilter ? "rotate-180" : ""
            }`}
          />
        </button>
      </Popover>
    </>
  );
};

export default FilterDropdown;
