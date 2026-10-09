import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { KepProvider } from "./context/KepContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 3. */}
    <KepProvider>
      <App />
    </KepProvider>
  </StrictMode>,
);
