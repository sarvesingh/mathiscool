"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/questions";
import { Question } from "@/lib/types";

function getDifficultyClasses(difficulty: string) {
  if (difficulty === "easy") return "bg-success-light text-success";
  if (difficulty === "medium")
    return "bg-[#fef9c3] text-[#a16207] dark:bg-[#422006] dark:text-[#fbbf24]";
  return "bg-error-light text-error";
}

export default function QuestionSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results: Question[] = useMemo(() => {
    if (query.length < 2) return [];
    const lower = query.toLowerCase();
    return questions
      .filter(
        (q) =>
          q.questionText.toLowerCase().includes(lower) ||
          q.tags.some((t) => t.toLowerCase().includes(lower)),
      )
      .slice(0, 5);
  }, [query]);

  useEffect(() => {
    setActiveIndex(0);
    setOpen(results.length > 0);
  }, [results]);

  // Click outside to close
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function navigateToQuestion(q: Question) {
    router.push(`/question/${q.id}`);
    setOpen(false);
    setQuery("");
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      navigateToQuestion(results[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => results.length > 0 && setOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder="Search questions..."
        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
      />

      {open && results.length > 0 && (
        <ul className="absolute z-50 mt-1 w-full overflow-hidden rounded-lg border border-border bg-surface shadow-lg">
          {results.map((q, i) => (
            <li key={q.id}>
              <button
                onMouseDown={() => navigateToQuestion(q)}
                onMouseEnter={() => setActiveIndex(i)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                  i === activeIndex ? "bg-muted-light" : ""
                }`}
              >
                <span className="shrink-0 font-mono text-xs text-muted">{q.id}</span>
                <span className="min-w-0 flex-1 truncate">
                  {q.questionText.length > 80
                    ? q.questionText.slice(0, 80) + "..."
                    : q.questionText}
                </span>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${getDifficultyClasses(q.difficulty)}`}
                >
                  {q.difficulty}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
