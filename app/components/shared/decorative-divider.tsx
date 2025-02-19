import type { HTMLAttributes } from "react";

interface DecorativeDividerProps extends HTMLAttributes<HTMLDivElement> {
  opacity?: number;
}

export function DecorativeDivider({ opacity = 0.3, ...props }: DecorativeDividerProps) {
  return (
    <div
      className={`w-full flex items-center gap-4 px-1`}
      style={{ opacity }}
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <div className="w-2 h-2 bg-indigo-400 rounded-full" />
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </div>
  );
} 