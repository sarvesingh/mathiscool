"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { HistoryEntry } from "@/lib/types";

interface SessionHistoryContextValue {
  entries: HistoryEntry[];
  addEntry: (entry: HistoryEntry) => void;
  clearHistory: () => void;
}

const SessionHistoryContext = createContext<SessionHistoryContextValue | null>(null);

export function SessionHistoryProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<HistoryEntry[]>([]);

  const addEntry = useCallback((entry: HistoryEntry) => {
    setEntries((prev) => [entry, ...prev.filter((e) => e.questionId !== entry.questionId)]);
  }, []);

  const clearHistory = useCallback(() => {
    setEntries([]);
  }, []);

  return (
    <SessionHistoryContext.Provider value={{ entries, addEntry, clearHistory }}>
      {children}
    </SessionHistoryContext.Provider>
  );
}

export function useSessionHistory() {
  const ctx = useContext(SessionHistoryContext);
  if (!ctx) throw new Error("useSessionHistory must be used within SessionHistoryProvider");
  return ctx;
}
