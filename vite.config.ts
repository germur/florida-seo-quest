import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ⬇️ OPTIMIZACIÓN: dividir el bundle por dependencias
  build: {
    chunkSizeWarningLimit: 1024, // sube el umbral del warning
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            const parts = id.toString().split("node_modules/")[1].split("/");
            const scopeOrPkg = parts[0];
            const pkg = scopeOrPkg.startsWith("@") ? `${scopeOrPkg}/${parts[1]}` : scopeOrPkg;
            return pkg; // un chunk por paquete (HTTP/2 lo maneja bien)
          }
        },
      },
    },
  },
}));
