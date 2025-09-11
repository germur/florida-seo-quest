import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import brand fonts
import "@fontsource/space-grotesk/700.css"; // Bold for titles
import "@fontsource/poppins/600.css"; // Semibold for subtitles  
import "@fontsource/inter/400.css"; // Regular for body text

createRoot(document.getElementById("root")!).render(<App />);
