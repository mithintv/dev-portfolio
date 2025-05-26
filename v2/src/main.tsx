import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Home } from "./components/pages/home";
import { Projects } from "./components/pages/projects";
import { Spotlight } from "./components/spotlight";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Spotlight className="p-0">
      <main className="flex flex-col items-center pb-8">
        <Home />
        <Projects />
      </main>
    </Spotlight>
  </StrictMode>
);
