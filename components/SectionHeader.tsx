import { Section } from "@/lib/types";

interface SectionHeaderProps {
  section: Section;
  questionCount: number;
  answeredCount: number;
}

export default function SectionHeader({
  section,
  questionCount,
  answeredCount,
}: SectionHeaderProps) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">{section.name}</h2>
          <p className="text-sm text-muted">{section.description}</p>
        </div>
        <span className="text-sm font-medium text-muted">
          {answeredCount}/{questionCount} answered
        </span>
      </div>
    </div>
  );
}
