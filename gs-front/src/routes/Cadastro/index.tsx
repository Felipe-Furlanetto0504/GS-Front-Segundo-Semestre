import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { Funcionario } from "../../types/funcionario";

export default function Cadastro() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Cadastro";
  }, []);

  const [sucesso, setSucesso] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Funcionario>();

  const onSubmit = async (data: Funcionario) => {
    try {
      const response = await fetch("http://localhost:8080/funcionario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        alert("Falha no processamento. Acione o suporte.");
        return;
      }

      setSucesso("Cadastro efetuado com êxito.");

      navigate("/");
      reset();

    } catch {
      alert("Falha no processamento. Acione o suporte.");
    }
  };

  return (
    <section className="min-h-screen w-full flex justify-center items-center p-4 sm:p-6">
      <div className="card-dynamic border card-light-dark rounded-lg shadow-md p-6 sm:p-8 w-full max-w-md sm:max-w-lg">
        <h1 className="text-xl sm:text-2xl font-bold mb-6">Cadastro de Funcionário</h1>

        {sucesso && (
          <div className="w-full mb-4 p-3 rounded bg-green-600 text-white text-sm font-semibold shadow">
            {sucesso}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          <div>
            <label className="block mb-1 text-sm font-medium">
              Nome do Funcionário
            </label>
            <input
              type="text"
              placeholder="Seu Nome"
              {...register("nome_funcionario", { required: "O Nome é obrigatório" })}
              className="card-dynamic border p-2 rounded w-full text-sm sm:text-base"
            />
            {errors.nome_funcionario && (
              <span className="text-red-600 text-xs mt-1">
                {errors.nome_funcionario.message}
              </span>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Cargo</label>
            <input
              type="text"
              placeholder="Cargo"
              {...register("cargo_funcionario", { required: "O Cargo é obrigatório" })}
              className="card-dynamic border p-2 rounded w-full text-sm sm:text-base"
            />
            {errors.cargo_funcionario && (
              <span className="text-red-600 text-xs mt-1">
                {errors.cargo_funcionario.message}
              </span>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">E-mail</label>
            <input
              type="email"
              placeholder="SeuEmail@gmail.com"
              {...register("email_funcionario", { required: "O E-mail é obrigatório" })}
              className="card-dynamic border p-2 rounded w-full text-sm sm:text-base"
            />
            {errors.email_funcionario && (
              <span className="text-red-600 text-xs mt-1">
                {errors.email_funcionario.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#696969] text-white py-2 px-4 rounded font-semibold hover:bg-[#505050] transition text-sm sm:text-base"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}
