interface FilterOptionProps {
  items: { [type: string]: number };
  selectedFilterOptions: Array<string>;
  onFilterOptionChange: (item: string) => void;
}

const FilterOptions = ({
  items,
  selectedFilterOptions,
  onFilterOptionChange,
}: FilterOptionProps) => {
  return (
    <>
      {Object.entries(items).map(([item, count]) => (
        <div
          key={item}
          className="flex w-[50%] items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-50 hover:text-black md:w-full"
        >
          <input
            type="checkbox"
            checked={selectedFilterOptions.includes(item)}
            onChange={() => onFilterOptionChange(item)}
            className="text-amber-600 focus:ring-amber-600"
          />
          <span>
            {item} ({count})
          </span>
        </div>
      ))}
    </>
  );
};

export default FilterOptions;
