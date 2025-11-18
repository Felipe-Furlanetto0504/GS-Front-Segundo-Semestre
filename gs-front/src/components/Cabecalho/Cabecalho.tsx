import Menu from "../Menu/Menu";
import { ThemeToggleButton } from "../../ThemeToggleButton";

export default function Cabecalho() {
  return (
    <header
      className="w-full flex items-center justify-between px-6 py-4 shadow-md border-b"
      style={{
        backgroundColor: "var(--header-bg)",
        color: "var(--header-text)",
        borderColor: "var(--header-border)",
      }}
    >
      <h1 className="text-2xl font-semibold tracking-wide">Team Up</h1>

      <div className="flex items-center gap-4">
        <ThemeToggleButton />
        <Menu />
      </div>
    </header>
  );
}

