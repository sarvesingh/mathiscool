import Link from "next/link";
import { grades } from "@/lib/grades";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">Math is Cool</h1>
        <p className="mt-3 text-lg text-muted">
          Practice tests by grade level — algebra, geometry, probability &amp; more.
        </p>
      </div>

      <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
        {grades.map((g) => (
          <div
            key={g.value}
            className="rounded-xl border border-border bg-surface p-5 transition-shadow hover:shadow-md"
          >
            <h2 className="text-lg font-bold">{g.label}</h2>
            <p className="mt-1 text-sm text-muted">{g.description}</p>
            <div className="mt-4 flex gap-2">
              <Link
                href={`/practice?grade=${g.value}&mode=full`}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Full Test
              </Link>
              <Link
                href={`/practice?grade=${g.value}&mode=random`}
                className="rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Random Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
