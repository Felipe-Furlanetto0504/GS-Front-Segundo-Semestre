import { useEffect } from "react";

export default function Contato() {
  useEffect(() => {
    document.title = "Contato";
  }, []);

  return (
    <main className="w-full flex flex-col items-center px-6 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-[#3b3b3b] mb-8 tracking-wide">
        Contato
      </h1>

      <section className="w-full max-w-xl bg-white shadow-md rounded-lg p-6 border border-gray-200 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-[#3b3b3b]">Email:</h2>
          <div className="pl-2">
            <p className="text-gray-700 font-medium">TeamUp@gmail.com.br</p>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-[#3b3b3b]">Telefone:</h2>
          <div className="pl-2">
            <p className="text-gray-700 font-medium">+55 (11) 57901-3981</p>
          </div>
        </div>
      </section>
    </main>
  );
}
