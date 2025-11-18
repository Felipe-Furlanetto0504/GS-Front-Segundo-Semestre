import { useEffect } from "react";

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre";
  }, []);

  return (
    <main>
      <h1>Sobre</h1>
      <main>
        <div>
          <section>
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
      </main>
    </main>
  );
}
