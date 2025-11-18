import { useEffect } from "react";
import imagem from "../../img/imagem.jpg";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <main
      className="w-full flex flex-col items-center px-6 py-10 min-h-screen"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <h1
        className="text-3xl font-bold mb-10 tracking-wide"
        style={{ color: "var(--text-soft)" }}
      >
        Home
      </h1>

      <section className=" card-dynamic border w-full max-w-3xl">
        <div
          className="shadow-md rounded-lg p-6 space-y-6"
          style={{
            backgroundColor: "var(--bg-card)",
            border: `1px solid var(--border)`,
            color: "var(--text)",
          }}
        >
          <img
            src={imagem}
            alt="escritorio"
            className="w-full h-64 object-cover rounded-md"
            style={{ border: `1px solid var(--border)` }}
          />

          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--text-soft)" }}
          >
            Bem-Vindo
          </h2>

          <div className="space-y-4">
            <p className="leading-relaxed" style={{ color: "var(--text)" }}>
              Neste ambiente, reforçamos o valor do trabalho bem-executado, da
              disciplina e do compromisso com as entregas. Aqui, cada
              colaborador encontra motivação para manter a produtividade em
              alta, seguindo práticas consolidadas que sempre sustentaram a
              excelência no mundo corporativo.
            </p>

            <p className="leading-relaxed" style={{ color: "var(--text)" }}>
              Nosso objetivo é promover uma cultura onde o esforço diário é
              reconhecido, a constância é valorizada e o profissional se sente
              estimulado a cumprir suas metas com clareza, foco e
              responsabilidade. Ao manter o olhar no que realmente importa — a
              execução consistente — abrimos espaço para conquistas sólidas e
              duradouras.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

