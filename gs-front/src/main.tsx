import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./routes/Error";
import Contato from "./routes/Contato";
import Integrantes from "./routes/Integrantes";
import Faq from "./routes/Faq";
import Sobre from "./routes/Sobre";
import "./globals.css";
import Home from "./routes/Home";
import Cadastro from "./routes/Cadastro";
import Tarefa from "./routes/Tarefa";
import Equipe from "./routes/Equipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contato", element: <Contato /> },
      { path: "/integrantes", element: <Integrantes /> },
      { path: "/faq", element: <Faq /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/cadastro", element: <Cadastro/> },
      { path: "/tarefa", element: <Tarefa/>},
      { path: "/equipe", element: <Equipe /> }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
