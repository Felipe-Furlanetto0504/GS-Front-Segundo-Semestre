export default function Rodape() {
  return (
    <footer
      className="w-full min-h-min text-center py-4 shadow-inner border-t"
      style={{
        backgroundColor: "var(--header-bg)",
        color: "var(--header-text)",
        borderColor: "var(--header-border)",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <p className="text-sm tracking-wide">
        &copy; Todos os direitos reservados - 2025
      </p>
    </footer>
  );
}
