import { useEffect } from "react";

export default function Faq() {
  useEffect(() => {
    document.title = "FAQ";
  }, []);

  return (
    <main className="w-full flex flex-col items-center px-6 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-[#3b3b3b] mb-10 tracking-wide">
        FAQ
      </h1>

      <section className="w-full max-w-2xl space-y-6">
        <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 space-y-2">
          <h2 className="text-xl font-semibold text-[#3b3b3b]">
            Como funciona?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Esse site te ajuda a ficar mais inspirado no seu trabalho.
          </p>
        </div>

        <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 space-y-2">
          <h2 className="text-xl font-semibold text-[#3b3b3b]">
            Como funciona as recompensas por tarefas concluídas?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Após terminar a tarefa fale com a sua empresa para a recompensa.
          </p>
        </div>

        <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 space-y-2">
          <h2 className="text-xl font-semibold text-[#3b3b3b]">
            A plataforma funciona em dispositivos móveis?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Sim. O site segue padrões responsivos já estabelecidos no mercado,
            garantindo usabilidade consistente em desktops, tablets e
            smartphones.
          </p>
        </div>
      </section>
    </main>
  );
}
