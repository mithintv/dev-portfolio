import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";

import ReactGA from "react-ga4";

import { Home } from "./components/pages/home";
import { Projects } from "./components/pages/projects";
import { Spotlight } from "./components/spotlight";
import "./index.css";

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  useEffect(() => {
    ReactGA.initialize(import.meta.env.VITE_GA);
    // Send pageview with a custom path
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
  }, []);

  return (
    <StrictMode>
      <Spotlight className="p-0">
        <main className="flex flex-col items-center pb-8">
          <Home />
          <Projects />
        </main>
      </Spotlight>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
