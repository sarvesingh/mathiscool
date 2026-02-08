import Link from "next/link";
import { grades } from "@/lib/grades";
import { Competition } from "@/lib/types";
import QuestionSearch from "@/components/QuestionSearch";

const competitions: { id: Competition; name: string; description: string }[] = [
  {
    id: "math-is-cool",
    name: "Math Is Cool",
    description: "Practice tests from academicsarecool.com — grades 5 through 10.",
  },
  {
    id: "mathcounts",
    name: "MATHCOUNTS",
    description: "Practice problems from mathcounts.org — Sprint, Target, Team & Countdown.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">Math Practice</h1>
        <p className="mt-3 text-lg text-muted">
          Choose a competition and grade level to start practicing.
        </p>
      </div>

      <QuestionSearch />

      <div className="w-full max-w-3xl space-y-8">
        {competitions.map((comp) => {
          const compGrades = grades.filter((g) => g.competition === comp.id);
          return (
            <div key={comp.id} className="rounded-xl border border-border bg-surface p-6">
              <h2 className="text-2xl font-bold">{comp.name}</h2>
              <p className="mt-1 text-sm text-muted">{comp.description}</p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
          );
        })}
      </div>
    </div>
  );
}
