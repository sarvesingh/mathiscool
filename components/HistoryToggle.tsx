"use client";

import { useState } from "react";
import { useSessionHistory } from "./SessionHistoryContext";
import HistoryDrawer from "./HistoryDrawer";

export default function HistoryToggle() {
  const { entries } = useSessionHistory();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-4 top-4 z-30 flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-primary-hover"
      >
        History
        {entries.length > 0 && (
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/20 px-1 text-xs font-bold">
            {entries.length}
          </span>
        )}
      </button>
      <HistoryDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
