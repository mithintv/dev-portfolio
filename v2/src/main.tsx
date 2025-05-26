import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Home } from "./components/pages/Home";
import { Projects } from "./components/pages/Projects";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="flex flex-col items-center">
      <Home />
      <Projects />
    </main>
  </StrictMode>
);
