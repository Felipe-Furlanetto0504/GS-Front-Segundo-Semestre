import { useEffect } from "react";

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre";
  }, []);

  return (
    <main
      className="w-full flex flex-col items-center px-4 sm:px-6 py-10 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <h1 className="text-2xl sm:text-3xl font-bold mb-10 tracking-wide">
        Sobre
      </h1>

      <section className="card-dynamic border w-full max-w-xl sm:max-w-2xl lg:max-w-3xl">
        <div
          className="rounded-lg p-4 sm:p-6 shadow-md"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border)",
          }}
        >
          <section className="space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              Nosso portal foi concebido para resgatar a essência do compromisso
              profissional, fortalecendo a disciplina operacional e reforçando a
              cultura de entrega que sempre norteou as organizações de alta
              performance. Aqui, cada colaborador encontra um ambiente
              estruturado para impulsionar sua produtividade, organizar
              prioridades e executar suas tarefas com clareza.
            </p>

            <p>
              Nosso objetivo é simples: criar um ecossistema digital que
              preserve os valores tradicionais do ambiente corporativo —
              responsabilidade, constância e comprometimento — enquanto oferece
              mecanismos contemporâneos de incentivo, reforçando a motivação e
              garantindo a entrega consistente de resultados.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
