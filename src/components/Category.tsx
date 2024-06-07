import React, { ComponentProps } from "react";
import { cn } from "../utils/util";

export interface PillProps extends ComponentProps<"div"> {
  selected?: boolean;
}

export default function Category({ className, selected, ...props }: PillProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-lg px-2 py-3 transition-colors",
        "dark:hover:hover-black",
        "bg-secondary hover:text-primary hover:bg-tertiary mb-10",
        selected
          ? "text-primary font-semibold ring-2 ring-gray-400"
          : "text-secondary font-normal",
        className
      )}
    />
  );
}
