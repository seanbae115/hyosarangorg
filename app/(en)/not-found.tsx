import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell lang="en" currentPath="/">
      <div className="section">
        <div className="shell">
          <h1>Page not found</h1>
          <p className="prose">
            The page you asked for doesn&rsquo;t exist. <a href="/">Return home</a>.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
