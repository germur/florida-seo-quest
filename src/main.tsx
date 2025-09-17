// src/main.tsx
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Fuentes
import "@fontsource/space-grotesk/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/inter/400.css";

createRoot(document.getElementById("root")!).render(<App />);
