import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactGA from "react-ga4";

import { Copyright } from "lucide-react";
import { Home } from "./components/pages/home";
import { Projects } from "./components/pages/projects";
import { Spotlight } from "./components/spotlight";
import "./index.css";

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <Spotlight className="p-0">
          <main className="flex flex-col items-center">
            <Home />
            <Projects />
            <span className="flex flex-row gap-x-1 py-4 items-center text-xs text-neutral-500 animate-appear">
              <Copyright size={12} />
              {new Date().getFullYear()} — Mithin Thomas
            </span>
          </main>
        </Spotlight>
      </QueryClientProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
