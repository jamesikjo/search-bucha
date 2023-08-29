"use client";

import { Dispatch, SetStateAction, ReactNode, useRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import useWindowSize from "@/lib/hooks/use-window-size";
import Leaflet from "./leaflet";

export default function Popover({
  children,
  content,
  align = "end",
  openFilter,
  setOpenFilter,
}: {
  children: ReactNode;
  content: ReactNode | string;
  align?: "center" | "start" | "end";
  openFilter: boolean;
  setOpenFilter: Dispatch<SetStateAction<boolean>>;
}) {
  const { isMobile, isDesktop } = useWindowSize();

  if (!isMobile && !isDesktop) return <>{children}</>;

  return (
    <>
      {isMobile && children}
      {openFilter && isMobile && (
        <Leaflet setShow={setOpenFilter}>{content}</Leaflet>
      )}
      {isDesktop && (
        <PopoverPrimitive.Root
          open={openFilter}
          onOpenChange={(isOpen) => setOpenFilter(isOpen)}
        >
          <PopoverPrimitive.Trigger className="inline-flex" asChild>
            {children}
          </PopoverPrimitive.Trigger>
          <PopoverPrimitive.Content
            sideOffset={10}
            align={align}
            className="animate-slide-up-fade z-20 items-center rounded-md border bg-white drop-shadow-lg dark:bg-gray-600"
          >
            {content}
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Root>
      )}
    </>
  );
}
