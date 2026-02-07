import PracticeShell from "@/components/PracticeShell";
import { Competition, GradeLevel } from "@/lib/types";

interface PracticePageProps {
  searchParams: Promise<{ grade?: string; mode?: string; competition?: string }>;
}

export default async function PracticePage({ searchParams }: PracticePageProps) {
  const params = await searchParams;
  const grade = (params.grade ?? "7-8") as GradeLevel;
  const mode = (params.mode ?? "full") as "full" | "random";
  const competition = (params.competition ?? "math-is-cool") as Competition;

  return <PracticeShell grade={grade} mode={mode} competition={competition} />;
}
