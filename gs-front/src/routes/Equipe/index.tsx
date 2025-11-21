import { useEffect, useState } from "react";
import type { Equipe } from "../../types/equipe";

export default function Equipe() {
  useEffect(() => {
    document.title = "Equipe";
  }, []);

  const [equipe, setEquipe] = useState<Equipe[]>([]);

  const fetchEquipe = async () => {
    try {
      const response = await fetch("http://localhost:8080/equipe");
      if (!response.ok) throw new Error("Erro ao achar equipe");
      const data: Equipe[] = await response.json();
      setEquipe(data);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  useEffect(() => {
    fetchEquipe();
  }, []);

  const handleEntra = async (id: number) => {


    const confirmEntrar = window.confirm("Deseja entrar na Equipe?");
    if (!confirmEntrar) return;

    try {
      const response = await fetch(`http://localhost:8080/equipe/${id}`, {
        method: "POST",
      });

      if (!response.ok) throw new Error("Erro ao entrar na equipe");

      setEquipe((prev) => prev.filter((item) => item.id_equipe !== id));
      alert("Entrada efetuada com sucesso.");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao entrar na equipe.");
    }
  };

  return (
    <main
      className="min-h-screen py-10 px-6"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <h1
        className="text-4xl font-semibold mb-8 pb-2"
        style={{ color: "var(--text)", borderColor: "var(--header-border)" }}
      >
        Equipe
      </h1>

      <section className="flex justify-center">
        <div
          className="w-full max-w-5xl shadow-lg rounded-xl p-6"
          style={{
            backgroundColor: "var(--header-bg)",
            color: "var(--text)",
            border: "1px solid var(--header-border)",
          }}
        >
          <table className=" card-dynamic border w-full border-collapse">
            <thead>
              <tr
                style={{
                  backgroundColor: "var(--header-border)",
                  color: "var(--header-text)",
                }}
              >
                <th
                  className="py-3 px-4 text-left border-b"
                  style={{ borderColor: "var(--header-bg)" }}
                >
                  ID
                </th>
                <th
                  className="py-3 px-4 text-left border-b"
                  style={{ borderColor: "var(--header-bg)" }}
                >
                  Nome da Equipe
                </th>
                <th
                  className="py-3 px-4 text-left border-b"
                  style={{ borderColor: "var(--header-bg)" }}
                >
                  Descrição da Equipe
                </th>
                <th
                  className="py-3 px-4 text-center border-b"
                  style={{ borderColor: "var(--header-bg)" }}
                >
                  Ações
                </th>
              </tr>
            </thead>

            <tbody>
              {equipe.map((e) => (
                <tr
                  key={e.id_equipe}
                  className="transition-colors"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                  }}
                  onMouseEnter={(ev) =>
                    (ev.currentTarget.style.backgroundColor =
                      "var(--header-border)")
                  }
                  onMouseLeave={(ev) =>
                    (ev.currentTarget.style.backgroundColor = "var(--bg)")
                  }
                >
                  <td
                    className=" card-dynamic border py-3 px-4 border-b"
                    style={{ borderColor: "var(--header-border)" }}
                  >
                    {e.id_equipe}
                  </td>
                  <td
                    className="py-3 px-4 border-b"
                    style={{ borderColor: "var(--header-border)" }}
                  >
                    {e.nome_equipe}
                  </td>
                  <td
                    className="py-3 px-4 border-b"
                    style={{ borderColor: "var(--header-border)" }}
                  >
                    {e.descricao_equipe}
                  </td>
                  <td
                    className="py-3 px-4 border-b text-center"
                    style={{ borderColor: "var(--header-border)" }}
                  >
                    <button
                      onClick={() => handleEntra(e.id_equipe)}
                      className="py-2 px-4 rounded-lg shadow-md transition hover:text-[#d6d6d6] card-dynamic border "
                    >
                      Entrar na Equipe
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr style={{ backgroundColor: "var(--bg)" }}>
                <td
                  colSpan={6}
                  className="py-3 px-4 font-semibold border-t"
                  style={{
                    borderColor: "var(--header-border)",
                    color: "var(--text)",
                  }}
                >
                  Total de Equipes: {equipe.length}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </main>
  );
}
