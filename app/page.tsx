const swatches = ["bg-green", "bg-aqua", "bg-yellow", "bg-blue", "bg-red"];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-sm text-green">// step 1 complete</p>
      <h1 className="mt-2 font-display text-4xl font-bold">hushgrove</h1>
      <p className="mt-3 max-w-prose leading-relaxed text-muted">
        Body text renders in Inter. Headings use Space Grotesk, and anything
        code-flavored uses JetBrains Mono.
      </p>
      <div className="mt-6 flex gap-2">
        {swatches.map((color) => (
          <span key={color} className={`h-6 w-6 rounded-full ${color}`} />
        ))}
      </div>
    </main>
  );
}
