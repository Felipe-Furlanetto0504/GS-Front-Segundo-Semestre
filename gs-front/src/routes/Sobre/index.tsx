import { useEffect } from "react";

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre";
  }, []);

  return (
    <main className="w-full flex flex-col items-center px-6 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-[#3b3b3b] mb-10 tracking-wide">
        Sobre
      </h1>

      <main className="w-full max-w-3xl">
        <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
          <section className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Nosso portal foi concebido para resgatar a essência do compromisso
              profissional, fortalecendo a disciplina operacional e reforçando a
              cultura de entrega que sempre norteou as organizações de alta
              performance. Aqui, cada colaborador encontra um ambiente
              estruturado para impulsionar sua produtividade, organizar
              prioridades e executar suas tarefas com clareza.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Nosso objetivo é simples: criar um ecossistema digital que
              preserve os valores tradicionais do ambiente corporativo —
              responsabilidade, constância e comprometimento — enquanto oferece
              mecanismos contemporâneos de incentivo, reforçando a motivação e
              garantindo a entrega consistente de resultados.
            </p>
          </section>
        </div>
      </main>
    </main>
  );
}
