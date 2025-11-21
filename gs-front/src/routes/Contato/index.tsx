import { useEffect } from "react";

export default function Contato() {
  useEffect(() => {
    document.title = "Contato";
  }, []);

  return (
    <main
      className="
        w-full 
        flex 
        flex-col 
        items-center 
        px-6 
        py-10 
        min-h-screen
        sm:px-10 
        lg:px-20
      "
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <h1
        className="
          text-3xl 
          font-bold 
          mb-8 
          tracking-wide
          text-center sm:text-left
        "
        style={{ color: "var(--text)" }}
      >
        Contato
      </h1>

      <section
        className="
          w-full 
          max-w-xl 
          shadow-md 
          rounded-lg 
          p-6 
          space-y-6 
          card-dynamic 
          border
          sm:p-8
        "
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <div className="card-dynamic border space-y-2">
          <h2
            className="text-xl font-semibold"
            style={{ color: "var(--text)" }}
          >
            Email:
          </h2>
          <div className="pl-2">
            <p
              style={{ color: "var(--text-secondary)" }}
              className="font-medium "
            >
              TeamUp@gmail.com.br
            </p>
          </div>
        </div>

        <div className="card-dynamic border space-y-2">
          <h2
            className="text-xl font-semibold"
            style={{ color: "var(--text)" }}
          >
            Telefone:
          </h2>
          <div className="pl-2">
            <p
              style={{ color: "var(--text-secondary)" }}
              className="font-medium"
            >
              +55 (11) 57901-3981
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
