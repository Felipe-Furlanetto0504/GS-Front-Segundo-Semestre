import { Link } from "react-router-dom";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        px-6 
        py-3 
        shadow-sm 
        border-b
        w-full
      "
      style={{
        backgroundColor: "var(--header-bg)",
        color: "var(--header-text)",
        borderColor: "var(--header-border)",
      }}
    >
      <div className="flex justify-between items-center md:hidden">
        <p className="font-semibold tracking-wide">Menu</p>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl font-bold select-none"
        >
          ☰
        </button>
      </div>

      <div
        className={`
          ${
            open ? "flex" : "hidden"
          } 
          flex-col 
          gap-4 
          mt-4 
          md:mt-0
          md:flex 
          md:flex-row 
          md:gap-6
        `}
      >
        <Link to="/" className="hover:text-[#d6d6d6] transition-colors font-medium">
          Home
        </Link>
        <Link to="/contato" className="hover:text-[#d6d6d6] transition-colors font-medium">
          Contato
        </Link>
        <Link to="/faq" className="hover:text-[#d6d6d6] transition-colors font-medium">
          Faq
        </Link>
        <Link to="/sobre" className="hover:text-[#d6d6d6] transition-colors font-medium">
          Sobre
        </Link>
        <Link to="/integrantes" className="hover:text-[#d6d6d6] transition-colors font-medium">
          Integrantes
        </Link>
        <Link to="/cadastro" className="hover:text-[#d6d6d6] transition-colors font-medium">
          Cadastro
        </Link>
        <Link to="/equipe" className="hover:text-[#d6d6d6] transition-colors font-medium">
          Equipe
        </Link>
        <Link to="/tarefa" className="hover:text-[#d6d6d6] transition-colors font-medium">
          Tarefas
        </Link>
      </div>
    </nav>
  );
}
