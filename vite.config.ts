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
            // React core libraries
            if (id.includes("react") || id.includes("react-dom") || id.includes("scheduler")) {
              return "react-vendor";
            }
            
            // React Router
            if (id.includes("react-router") || id.includes("@remix-run")) {
              return "router";
            }
            
            // Radix UI components
            if (id.includes("@radix-ui")) {
              return "radix-ui";
            }
            
            // Other React libraries
            if (id.includes("react-")) {
              return "react-libs";
            }
            
            // Utility libraries
            if (id.includes("tailwind") || id.includes("clsx") || id.includes("class-variance-authority")) {
              return "utils";
            }
            
            // Analytics and tracking
            if (id.includes("tanstack")) {
              return "tanstack";
            }
            
            // Other large libraries get their own chunks
            const parts = id.toString().split("node_modules/")[1].split("/");
            const scopeOrPkg = parts[0];
            const pkg = scopeOrPkg.startsWith("@") ? `${scopeOrPkg}/${parts[1]}` : scopeOrPkg;
            return `vendor-${pkg}`;
          }
          
          // App code chunking
          if (id.includes("/src/pages/")) {
            return "pages";
          }
          
          if (id.includes("/src/components/ui/")) {
            return "ui-components";
          }
        },
      },
    },
  },
}));
