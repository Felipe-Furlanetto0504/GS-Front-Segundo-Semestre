import { useEffect, useState } from "react";
import type { Equipe } from "../../types/equipe";

export default function Equipe() {
  useEffect(() => {
    document.title = "Equipe";
  }, []);

  const [equipe, setEquipe] = useState<Equipe[]>([]);

  const fetchEquipe = async () => {
    try {
      const response = await fetch(
        "https://team-up-jvm-latest.onrender.com/equipe"
      );
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
    const equipeAtual = localStorage.getItem("equipeAtual");

    if (equipeAtual) {
      alert(
        "Você já participa de uma equipe. Não é permitido ingressar em outra."
      );
      return;
    }

    const confirmEntrar = window.confirm("Deseja entrar na Equipe?");
    if (!confirmEntrar) return;

    try {
      const response = await fetch(
        `https://team-up-jvm-latest.onrender.com/equipe/entrar/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw new Error("Erro ao entrar na equipe");

      localStorage.setItem("equipeAtual", String(id));

      alert("Entrada efetuada com sucesso.");
      fetchEquipe();
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao entrar na equipe.");
    }
  };

  const handleSair = async () => {
    const equipeAtual = localStorage.getItem("equipeAtual");

    if (!equipeAtual) {
      alert("Você não está em nenhuma equipe.");
      return;
    }

    const confirmSair = window.confirm("Deseja sair da equipe atual?");
    if (!confirmSair) return;

    try {
      const response = await fetch(
        `https://team-up-jvm-latest.onrender.com/equipe/sair/${equipeAtual}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw new Error("Erro ao sair da equipe");

      localStorage.removeItem("equipeAtual");

      alert("Você saiu da equipe.");
      fetchEquipe();
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao sair da equipe.");
    }
  };

  const equipeAtual = localStorage.getItem("equipeAtual");

  return (
    <main
      className="min-h-screen py-8 sm:py-10 px-4 sm:px-6"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h1
          className="text-3xl sm:text-4xl font-semibold pb-2"
          style={{ color: "var(--text)", borderColor: "var(--header-border)" }}
        >
          Equipe
        </h1>

        {equipeAtual && (
          <button
            onClick={handleSair}
            className="py-2 px-4 rounded-lg shadow-md transition hover:text-[#d6d6d6]"
            style={{
              backgroundColor: "var(--header-border)",
              color: "var(--header-text)",
            }}
          >
            Sair da Equipe
          </button>
        )}
      </div>

      <section className="flex justify-center">
        <div
          className="w-full max-w-6xl shadow-lg rounded-xl p-4 sm:p-6 overflow-x-auto"
          style={{
            backgroundColor: "var(--header-bg)",
            color: "var(--text)",
            border: "1px solid var(--header-border)",
          }}
        >
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr
                style={{
                  backgroundColor: "var(--header-border)",
                  color: "var(--header-text)",
                }}
              >
                <th className="py-2 sm:py-3 px-3 sm:px-4 text-left border-b text-sm sm:text-base">
                  ID
                </th>
                <th className="py-2 sm:py-3 px-3 sm:px-4 text-left border-b text-sm sm:text-base">
                  Nome da Equipe
                </th>
                <th className="py-2 sm:py-3 px-3 sm:px-4 text-left border-b text-sm sm:text-base">
                  Descrição
                </th>
                <th className="py-2 sm:py-3 px-3 sm:px-4 text-center border-b text-sm sm:text-base">
                  Ações
                </th>
              </tr>
            </thead>

            <tbody>
              {equipe.map((e) => {
                const desabilitar = !!equipeAtual;

                return (
                  <tr
                    key={e.id_equipe}
                    className="transition-colors text-sm sm:text-base"
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
                    <td className="py-2 sm:py-3 px-3 sm:px-4 border-b">
                      {e.id_equipe}
                    </td>
                    <td className="py-2 sm:py-3 px-3 sm:px-4 border-b">
                      {e.nome_equipe}
                    </td>
                    <td className="py-2 sm:py-3 px-3 sm:px-4 border-b">
                      {e.descricao_equipe}
                    </td>
                    <td className="py-2 sm:py-3 px-3 sm:px-4 border-b text-center">
                      <button
                        onClick={() => handleEntra(e.id_equipe)}
                        disabled={desabilitar}
                        className="py-1 sm:py-2 px-3 sm:px-4 rounded-lg shadow-md transition hover:text-[#d6d6d6]
                        disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Entrar na Equipe
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            <tfoot>
              <tr style={{ backgroundColor: "var(--bg)" }}>
                <td
                  colSpan={6}
                  className="py-2 sm:py-3 px-3 sm:px-4 font-semibold border-t text-sm sm:text-base"
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
