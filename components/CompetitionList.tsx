"use client";

import { useState } from "react";
import Link from "next/link";
import { grades } from "@/lib/grades";
import { Competition } from "@/lib/types";

interface CompetitionItem {
  id: Competition;
  name: string;
  description: string;
}

export default function CompetitionList({
  competitions,
}: {
  competitions: CompetitionItem[];
}) {
  const [expanded, setExpanded] = useState<Competition | null>(null);

  return (
    <div className="w-full max-w-3xl space-y-4">
      {competitions.map((comp) => {
        const isOpen = expanded === comp.id;
        const compGrades = grades.filter((g) => g.competition === comp.id);

        return (
          <div
            key={comp.id}
            className="rounded-xl border border-border bg-surface"
          >
            <button
              type="button"
              onClick={() => setExpanded(isOpen ? null : comp.id)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <div>
                <h2 className="text-2xl font-bold">{comp.name}</h2>
                <p className="mt-1 text-sm text-muted">{comp.description}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`ml-4 shrink-0 text-muted transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? `${compGrades.length * 200}px` : "0px" }}
            >
              <div className="grid gap-4 px-6 pb-6 sm:grid-cols-2">
                {compGrades.map((g) => (
                  <div
                    key={`${comp.id}-${g.value}`}
                    className="rounded-lg border border-border bg-background p-4"
                  >
                    <h3 className="text-lg font-bold">{g.label}</h3>
                    <p className="mt-1 text-sm text-muted">{g.description}</p>
                    <div className="mt-3 flex gap-2">
                      <Link
                        href={`/practice?competition=${comp.id}&grade=${g.value}&mode=full`}
                        className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                      >
                        Full Test
                      </Link>
                      <Link
                        href={`/practice?competition=${comp.id}&grade=${g.value}&mode=random`}
                        className="rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                      >
                        Random Quiz
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
