import { useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Popover from "@/components/shared/popover";

const ModeToggle = () => {
  const { setTheme } = useTheme();
  const [openFilter, setOpenFilter] = useState(false);

  const content = (
    <div className="w-full rounded-md p-2 sm:w-40">
      <button
        className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 hover:text-black"
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 hover:text-black"
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
      <button
        className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100 hover:text-black"
        onClick={() => setTheme("system")}
      >
        System
      </button>
    </div>
  );

  return (
    <Popover
      content={content}
      openFilter={openFilter}
      setOpenFilter={setOpenFilter}
      align="end"
    >
      <button
        className="relative rounded-md border p-2 px-2 text-sm font-medium hover:bg-white hover:text-black"
        onClick={() => setOpenFilter(!openFilter)}
      >
        <Sun
          color="currentColor"
          strokeWidth={2}
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"
        />
        <Moon
          color="currentColor"
          strokeWidth={2}
          className="absolute inset-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span className="sr-only">Toggle theme</span>
      </button>
    </Popover>
  );
};

export default ModeToggle;
