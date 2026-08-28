/** Numbered process steps: 5-across on desktop, stacked on mobile (see globals.css). */
export default function Stepper({
  steps,
}: {
  steps: { n: string; title: string; body: string }[];
}) {
  return (
    <ol className="stepper">
      {steps.map((s) => (
        <li className="stepper__step" key={s.n}>
          <span className="n">{s.n}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}
