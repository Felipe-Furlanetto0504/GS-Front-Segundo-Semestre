import { useEffect } from "react";
import felipe from "../../img/felipe.jpg";
import joao from "../../img/joao.jpg";
import joaocc from "../../img/joaocc.jpg";

export default function Integrantes() {
  useEffect(() => {
    document.title = "Integrantes";
  }, []);

  return (
    <main className="w-full flex flex-col items-center px-6 py-10 bg-dynamic min-h-screen">
      <h1 className="text-3xl font-bold text-dynamic-light mb-10 tracking-wide">
        Integrantes
      </h1>

      <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="card-dynamic border shadow-md rounded-lg p-6 flex flex-col items-center space-y-3">
          <img
            src={felipe}
            alt="felipe"
            className="w-32 h-32 object-cover rounded-full border border-dynamic"
          />
          <p className="text-dynamic font-medium">Nome: Felipe Furlanetto</p>
          <p className="text-dynamic-light">RM: 562766</p>
          <p className="text-dynamic-light">Turma: 1TDSPF</p>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/Felipe-Furlanetto0504" className="text-blue-500 hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/felipe-furlanetto-a64671364/" className="text-blue-500 hover:underline">LinkedIn</a>
          </div>
        </div>

        <div className="card-dynamic border shadow-md rounded-lg p-6 flex flex-col items-center space-y-3">
          <img
            src={joao}
            className="w-32 h-32 object-cover rounded-full border border-dynamic"
          />
          <p className="text-dynamic font-medium">Nome: João Victor Bueno Castelini Da Silva</p>
          <p className="text-dynamic-light">RM: 564115</p>
          <p className="text-dynamic-light">Turma: 1TDSPF</p>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/Buenozw" className="text-blue-500 hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/victor-bueno%E3%83%84-116757350" className="text-blue-500 hover:underline">LinkedIn</a>
          </div>
        </div>

        <div className="card-dynamic border shadow-md rounded-lg p-6 flex flex-col items-center space-y-3">
          <img
            src={joaocc}
            className="w-32 h-32 object-cover rounded-full border border-dynamic"
          />
          <p className="text-dynamic font-medium">Nome: João Victor Caetano Alves Da Silva</p>
          <p className="text-dynamic-light">RM: 562074</p>
          <p className="text-dynamic-light">Turma: 1TDSPF</p>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/joaocaetano1310" className="text-blue-500 hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-caetano-b853222b6/" className="text-blue-500 hover:underline">LinkedIn</a>
          </div>
        </div>

      </section>
    </main>
  );
}

