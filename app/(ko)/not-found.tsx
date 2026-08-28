import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell lang="ko" currentPath="/">
      <div className="section">
        <div className="shell">
          <h1>페이지를 찾을 수 없습니다</h1>
          <p className="prose">
            요청하신 페이지가 없습니다. <a href="/ko/">처음으로 돌아가기</a>.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
