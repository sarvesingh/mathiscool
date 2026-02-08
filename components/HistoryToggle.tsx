"use client";

import { useState } from "react";
import { useSessionHistory } from "./SessionHistoryContext";
import HistoryDrawer from "./HistoryDrawer";

export default function HistoryToggle() {
  const { entries } = useSessionHistory();
  const [open, setOpen] = useState(false);

  if (entries.length === 0) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-4 top-4 z-30 flex items-center gap-1 rounded-full border border-border bg-background/80 px-2.5 py-1 text-xs font-medium text-muted shadow-sm backdrop-blur-sm transition-colors hover:text-foreground hover:bg-background md:gap-1.5 md:px-3 md:py-1.5 md:text-sm"
      >
        History
        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-primary/15 px-0.5 text-[10px] font-semibold text-primary md:h-5 md:min-w-5 md:px-1 md:text-xs">
          {entries.length}
        </span>
      </button>
      <HistoryDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
