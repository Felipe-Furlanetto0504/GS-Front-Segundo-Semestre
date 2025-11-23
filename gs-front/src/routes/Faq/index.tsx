import { useEffect } from "react";

export default function Faq() {
  useEffect(() => {
    document.title = "FAQ";
  }, []);

  return (
    <main
      className="
        w-full 
        flex 
        flex-col 
        items-center 
        px-6 
        py-10 
        min-h-screen
        sm:px-10 
        lg:px-20
      "
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <h1
        className="
          text-3xl 
          font-bold 
          mb-10 
          tracking-wide
          text-center sm:text-left
        "
      >
        FAQ
      </h1>

      <section className="card-dynamic border w-full max-w-2xl space-y-6">
        <div
          className="
            shadow-md 
            rounded-lg 
            p-6 
            space-y-2
            sm:p-8
          "
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border)",
          }}
        >
          <h2 className="text-xl font-semibold">Como funciona?</h2>
          <p style={{ color: "var(--text-light)" }}>
            Esse site te ajuda a ficar mais inspirado no trabalho.
          </p>
        </div>

        <div
          className="
            shadow-md 
            rounded-lg 
            p-6 
            space-y-2
            sm:p-8
          "
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border)",
          }}
        >
          <h2 className="text-xl font-semibold">Como funcionam as recompensas?</h2>
          <p style={{ color: "var(--text-light)" }}>
            Após terminar a tarefa fale com a sua empresa.
          </p>
        </div>

        <div
          className="
            card-dynamic 
            border 
            shadow-md 
            rounded-lg 
            p-6 
            space-y-2
            sm:p-8
          "
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border)",
          }}
        >
          <h2 className="text-xl font-semibold">Funciona em celulares?</h2>
          <p style={{ color: "var(--text-light)" }}>
            Sim. O site é responsivo e segue padrões corporativos.
          </p>
        </div>
      </section>
    </main>
  );
}
