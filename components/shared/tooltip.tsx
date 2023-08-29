"use client";

import { ReactNode } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
export default function Tooltip({
  children,
  content,
}: {
  children: ReactNode;
  content: ReactNode | string;
  fullWidth?: boolean;
}) {
  return (
    <TooltipPrimitive.Provider delayDuration={100}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={4}
          side="right"
          className="animate-slide-up-fade z-30 hidden items-center overflow-hidden rounded-md border border-gray-200 bg-white drop-shadow-lg sm:block"
        >
          <TooltipPrimitive.Arrow className="fill-current text-white" />
          {typeof content === "string" ? (
            <div className="p-3.5">
              <span className="block max-w-xs text-center text-sm text-gray-700">
                {content}
              </span>
            </div>
          ) : (
            content
          )}
          <TooltipPrimitive.Arrow className="fill-current text-white" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
