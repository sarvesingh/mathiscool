import { Competition } from "@/lib/types";
import QuestionSearch from "@/components/QuestionSearch";
import CompetitionList from "@/components/CompetitionList";

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
  {
    id: "olympiad",
    name: "Math Olympiad",
    description: "Practice problems from olympiadusa.org — Preliminary rounds for grades 5 through 10.",
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

      <CompetitionList competitions={competitions} />
    </div>
  );
}
