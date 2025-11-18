import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="flex gap-6 bg-[#5a5a5a] text-white px-6 py-3 shadow-sm border-b border-[#474747]">
      <Link
        to="/"
        className="hover:text-[#000000] transition-colors font-medium"
      >
        Home
      </Link>
      <Link
        to="/contato"
        className="hover:text-[#000000] transition-colors font-medium"
      >
        Contato
      </Link>
      <Link
        to="/faq"
        className="hover:text-[#000000] transition-colors font-medium"
      >
        Faq
      </Link>
      <Link
        to="/sobre"
        className="hover:text-[#000000] transition-colors font-medium"
      >
        Sobre
      </Link>
      <Link
        to="/integrantes"
        className="hover:text-[#000000] transition-colors font-medium"
      >
        integrantes
      </Link>
    </nav>
  );
}
