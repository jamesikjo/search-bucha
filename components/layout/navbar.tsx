"use client";

import Link from "next/link";
import ThemeToggle from "@/components/layout/theme-toggle";

const NavBar = () => {
  return (
    <nav className="m-auto flex w-full items-center px-4 lg:container">
      <div className="flex h-16 w-full items-center justify-between">
        <Link href="/">
          <h3 className="font-display flex items-center text-2xl">
            <span className="inline font-bold tracking-tight">Search</span>
            <span className="inline font-bold tracking-tight text-amber-600">
              Bucha
            </span>
          </h3>
        </Link>
        <div className="flex gap-4">
          <ThemeToggle />
          {/* <button className="rounded-md border border-black p-2 px-4 text-sm font-medium text-black transition-all hover:bg-white hover:text-black">
            Contact
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
