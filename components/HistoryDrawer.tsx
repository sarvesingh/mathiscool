"use client";

import Link from "next/link";
import { useSessionHistory } from "./SessionHistoryContext";

interface HistoryDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function HistoryDrawer({ open, onClose }: HistoryDrawerProps) {
  const { entries, clearHistory } = useSessionHistory();

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-80 flex-col bg-background shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="text-lg font-semibold">Session History</h2>
          <button
            onClick={onClose}
            className="rounded p-1 text-muted hover:bg-muted-light hover:text-foreground transition-colors"
            aria-label="Close history"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Entry list */}
        <div className="flex-1 overflow-y-auto px-4 py-3">
          {entries.length === 0 ? (
            <p className="text-center text-sm text-muted py-8">
              No questions attempted yet. Start practicing to see your history here.
            </p>
          ) : (
            <ul className="space-y-2">
              {entries.map((entry) => (
                <li key={entry.questionId}>
                  <Link
                    href={`/question/${entry.questionId}`}
                    onClick={onClose}
                    className="block rounded-lg border border-border p-3 transition-colors hover:bg-surface"
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className={`mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full ${
                          entry.isCorrect ? "bg-success" : "bg-error"
                        }`}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium leading-snug truncate">
                          {entry.questionText}
                        </p>
                        <div className="mt-1 flex items-center gap-2 text-xs text-muted">
                          <span>{entry.sectionName}</span>
                          <span>·</span>
                          <span className="capitalize">{entry.difficulty}</span>
                          <span>·</span>
                          <span>{entry.attempts} {entry.attempts === 1 ? "attempt" : "attempts"}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {entries.length > 0 && (
          <div className="border-t border-border px-4 py-3">
            <button
              onClick={clearHistory}
              className="w-full rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-error-light hover:text-error hover:border-error"
            >
              Clear History
            </button>
          </div>
        )}
      </div>
    </>
  );
}
