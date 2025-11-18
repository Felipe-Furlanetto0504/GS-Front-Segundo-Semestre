import Menu from "../Menu/Menu";

export default function Cabecalho() {
  return (
    <header className="w-full flex items-center justify-between bg-[#747474] text-white px-6 py-4 shadow-md border-b border-[#474747]">
      <h1 className="text-2xl font-semibold tracking-wide">Team Up</h1>
      <div className="flex items-center">
        <Menu />
      </div>
    </header>
  );
}
