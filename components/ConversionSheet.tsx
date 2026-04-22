"use client";

import { useState } from "react";

export default function ConversionSheet() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-border bg-surface">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-foreground"
      >
        <span>Conversion Reference Sheet</span>
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="grid gap-4 px-4 pb-4 sm:grid-cols-2">
          {/* Left column */}
          <div className="space-y-3">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Length — Customary</p>
              <ul className="space-y-0.5 text-sm">
                <li>1 foot = 12 inches</li>
                <li>1 yard = 3 feet</li>
                <li>1 mile = 5,280 feet</li>
              </ul>
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Weight — Customary</p>
              <ul className="space-y-0.5 text-sm">
                <li>1 pound = 16 ounces</li>
                <li>1 ton = 2,000 pounds</li>
              </ul>
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Volume — Customary</p>
              <ul className="space-y-0.5 text-sm">
                <li>1 cup = 8 fluid ounces</li>
                <li>1 pint = 2 cups</li>
                <li>1 quart = 2 pints</li>
                <li>1 gallon = 4 quarts</li>
              </ul>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-3">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Length — Metric</p>
              <ul className="space-y-0.5 text-sm">
                <li>1 meter = 100 centimeters</li>
                <li>1 kilometer = 1,000 meters</li>
              </ul>
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Mass — Metric</p>
              <ul className="space-y-0.5 text-sm">
                <li>1 kilogram = 1,000 grams</li>
              </ul>
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Volume — Metric</p>
              <ul className="space-y-0.5 text-sm">
                <li>1 liter = 1,000 milliliters</li>
              </ul>
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted">Time</p>
              <ul className="space-y-0.5 text-sm">
                <li>1 hour = 60 minutes</li>
                <li>1 minute = 60 seconds</li>
                <li>P.M. to 24-hr: add 12 to the hour</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
