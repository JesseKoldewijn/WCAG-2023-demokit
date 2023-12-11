import React from "react";

import { type UnsafeDivAsButtonComponentProps } from "@/types/buttons";
import { cn } from "@/utils/cn";

export const UnsafeButton = ({
  children,
  ...rest
}: UnsafeDivAsButtonComponentProps) => {
  return (
    <div
      className="rounded bg-neutral-900 px-4 py-2 font-bold text-white hover:bg-neutral-200 hover:text-neutral-900"
      {...rest}
    >
      {children}
    </div>
  );
};

// unsafe button because it's a div with a role="button"
export const UnsafeIconButton = ({
  className,
  ...rest
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        className,
        "rounded bg-neutral-900 px-4 py-2 font-bold text-white hover:bg-neutral-200 hover:text-neutral-900",
      )}
      {...rest}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
        />
      </svg>
    </div>
  );
};
