import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav
      className="flex gap-6  px-6 py-3 shadow-sm border-b"
      style={{
        backgroundColor: "var(--header-bg)",
        color: "var(--header-text)",
        borderColor: "var(--header-border)",
      }}
    >
      <Link
        to="/"
        className="hover:text-[#d6d6d6] transition-colors font-medium"
      >
        Home
      </Link>
      <Link
        to="/contato"
        className="hover:text-[#d6d6d6] transition-colors font-medium"
      >
        Contato
      </Link>
      <Link
        to="/faq"
        className="hover:text-[#d6d6d6] transition-colors font-medium"
      >
        Faq
      </Link>
      <Link
        to="/sobre"
        className="hover:text-[#d6d6d6] transition-colors font-medium"
      >
        Sobre
      </Link>
      <Link
        to="/integrantes"
        className="hover:text-[#d6d6d6] transition-colors font-medium"
      >
        integrantes
      </Link>

      <Link
        to="/cadastro"
        className="hover:text-[#d6d6d6] transition-colors font-medium"
      >
        Cadastro
      </Link>

      <Link to = "/equipe" className="hover:text-[#d6d6d6] transition-colors font-medium" >Equipe</Link>
      <Link to = "/tarefa" className="hover:text-[#d6d6d6] transition-colors font-medium" >Tarefas</Link>
    </nav>
  );
}
