"use client";

import { ReactNode } from "react";
import { SessionHistoryProvider } from "./SessionHistoryContext";
import HistoryToggle from "./HistoryToggle";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionHistoryProvider>
      <HistoryToggle />
      {children}
    </SessionHistoryProvider>
  );
}
