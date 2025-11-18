import { useEffect } from "react";
import imagem from "../../img/imagem.jpg";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <main className="w-full flex flex-col items-center px-6 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-[#3b3b3b] mb-10 tracking-wide">
        Home
      </h1>

      <section className="w-full max-w-3xl">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg p-6 space-y-6">
          <img
            src={imagem}
            alt="escritorio"
            className="w-full h-64 object-cover rounded-md border border-gray-300"
          />

          <h2 className="text-2xl font-semibold text-[#3b3b3b]">Bem-Vindo</h2>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Neste ambiente, reforçamos o valor do trabalho bem-executado, da
              disciplina e do compromisso com as entregas. Aqui, cada
              colaborador encontra motivação para manter a produtividade em
              alta, seguindo práticas consolidadas que sempre sustentaram a
              excelência no mundo corporativo.
            </p>

            <p className="text-gray-700 leading-relaxed">
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
