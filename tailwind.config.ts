import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#020712",
        ink: "#050B18",
        neon: "#008CFF",
        cyan: "#00D5FF"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"]
      },
      boxShadow: {
        neon: "0 0 24px rgba(0, 140, 255, 0.35), inset 0 0 18px rgba(0, 213, 255, 0.08)",
        panel: "0 20px 80px rgba(0, 0, 0, 0.38), inset 0 0 30px rgba(0, 140, 255, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
