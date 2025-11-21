import { useEffect, useState } from "react";
import type { Tarefa } from "../../types/tarefa";
import { useForm } from "react-hook-form";

export default function Tarefa() {
  useEffect(() => {
    document.title = "Tarefas";
  }, []);

  const [tarefa, setTarefa] = useState<Tarefa[]>([]);
  const [open, setOpen] = useState(false);

  const {
    register,
    formState: { errors },
    reset,
  } = useForm<Tarefa>();

  const [form, setForm] = useState({
    descricao_tarefa: "",
    pontos_tarefa: "",
    data_fim_tarefa: "",
  });

  const fetchTarefa = async () => {
    try {
      const response = await fetch("http://localhost:8080/tarefa");
      if (!response.ok) throw new Error("Erro ao buscar a tarefa");
      const data: Tarefa[] = await response.json();
      setTarefa(data);
    } catch (error) {
      console.log("Erro:", error);
    }
  };

  useEffect(() => {
    fetchTarefa();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Deseja Deletar a Tarefa?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:8080/tarefa/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Erro ao deletar a tarefa");

      setTarefa((prev) => prev.filter((item) => item.id_tarefa !== id));
      alert("Tarefa deletada com sucesso");
    } catch (error) {
      console.log("Erro:", error);
      alert("Erro ao deletar a tarefa");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.descricao_tarefa.trim() ||
      !form.pontos_tarefa ||
      !form.data_fim_tarefa
    ) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/tarefa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          descricao_tarefa: form.descricao_tarefa,
          pontos_tarefa: Number(form.pontos_tarefa),
          data_fim_tarefa: form.data_fim_tarefa,
        }),
      });

      if (!response.ok) throw new Error("Erro ao cadastrar a tarefa");

      setForm({ descricao_tarefa: "", pontos_tarefa: "", data_fim_tarefa: "" });
      await fetchTarefa();
      alert("Tarefa cadastrada com sucesso");
      reset();
    } catch (error) {
      console.log("Erro:", error);
      alert("Erro ao cadastrar a tarefa");
    }
  };

  return (
    <main style={{ padding: "20px" }} className="flex-1">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-wide">Lista de Tarefas</h1>

        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 rounded shadow transition"
          style={{
            backgroundColor: "var(--header-bg)",
            color: "var(--header-text)",
            border: "1px solid var(--header-border)",
          }}
        >
          Nova Tarefa
        </button>
      </div>

      <section>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "var(--bg)",
            border: "1px solid var(--header-border)",
            color: "var(--text)",
          }}
        >
          <thead>
            <tr
              style={{
                background: "var(--header-bg)",
                color: "var(--header-text)",
              }}
            >
              <th
                style={{
                  padding: "12px",
                  border: "1px solid var(--header-border)",
                }}
              >
                ID
              </th>
              <th
                style={{
                  padding: "12px",
                  border: "1px solid var(--header-border)",
                }}
              >
                Descrição
              </th>
              <th
                style={{
                  padding: "12px",
                  border: "1px solid var(--header-border)",
                }}
              >
                Pontos
              </th>
              <th
                style={{
                  padding: "12px",
                  border: "1px solid var(--header-border)",
                }}
              >
                Data Fim
              </th>
              <th
                style={{
                  padding: "12px",
                  border: "1px solid var(--header-border)",
                }}
              >
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {tarefa.length > 0 ? (
              tarefa.map((item) => (
                <tr key={item.id_tarefa}>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid var(--header-border)",
                    }}
                  >
                    {item.id_tarefa}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid var(--header-border)",
                    }}
                  >
                    {item.descricao_tarefa}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid var(--header-border)",
                    }}
                  >
                    {item.pontos_tarefa}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid var(--header-border)",
                    }}
                  >
                    {item.data_fim_tarefa}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid var(--header-border)",
                      textAlign: "center",
                    }}
                  >
                    <button
                      onClick={() => handleDelete(item.id_tarefa)}
                      style={{
                        padding: "6px 12px",
                        background: "#c62828",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  style={{
                    padding: "15px",
                    textAlign: "center",
                    color: "var(--text)",
                  }}
                >
                  Nenhuma tarefa cadastrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div
            className="p-6 rounded shadow-lg w-96"
            style={{
              backgroundColor: "var(--bg)",
              color: "var(--text)",
              border: "1px solid var(--header-border)",
            }}
          >
            <h2 className="mb-4 border-b pb-2">Nova Tarefa</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="card-dynamic border flex flex-col">
                <label className=" font-medium">Descrição da Tarefa</label>
                <input
                  type="text"
                  placeholder="Descrição"
                  {...register("descricao_tarefa", {
                    required: "A descrição é obrigatória.",
                  })}
                  name="descricao_tarefa"
                  value={form.descricao_tarefa}
                  onChange={handleChange}
                  className="card-dynamic border p-2 rounded"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "var(--header-border)",
                  }}
                />
             
              </div>

              <div className="card-dynamic border flex flex-col">
                <label className="font-medium">Pontos</label>
                <input
                  type="number"
                  placeholder="Pontos"
                  {...register("pontos_tarefa", {
                    required: "Os pontos são obrigatórios.",
                  })}
                  name="pontos_tarefa"
                  value={form.pontos_tarefa}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "var(--header-border)",
                  }}
                />
              
              </div>

              <div className="card-dynamic border flex flex-col">
                <label className="font-medium">Data Fim</label>
                <input
                  type="date"
                  {...register("data_fim_tarefa", {
                    required: "A data final é obrigatória.",
                  })}
                  name="data_fim_tarefa"
                  value={form.data_fim_tarefa}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    borderColor: "var(--header-border)",
                  }}
                />
              
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-2 rounded"
                style={{
                  backgroundColor: "var(--header-bg)",
                  color: "var(--header-text)",
                  border: "1px solid var(--header-border)",
                }}
              >
                Salvar
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="card-dynamic border w-full py-2 rounded"
                style={{
                  backgroundColor: "var(--header-border)",
                  color: "var(--header-text)",
                }}
              >
                Fechar
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
