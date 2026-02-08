import SingleQuestionView from "@/components/SingleQuestionView";

interface QuestionPageProps {
  params: Promise<{ id: string }>;
}

export default async function QuestionPage({ params }: QuestionPageProps) {
  const { id } = await params;
  return <SingleQuestionView questionId={id} />;
}
