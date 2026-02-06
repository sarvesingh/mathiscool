import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">Math is Cool</h1>
        <p className="mt-3 text-lg text-muted">
          Practice test for 8th graders — algebra, geometry, probability &amp; more.
        </p>
      </div>
      <Link
        href="/practice"
        className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary-hover"
      >
        Start Practice
      </Link>
    </div>
  );
}
