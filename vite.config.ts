import replace from "@rollup/plugin-replace";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      ...replace({
        // Configurações do plugin replace
        preventAssignment: true,
        values: {
          "process.env.CONSULTA_DIABETE_API_REPO": JSON.stringify(
            process.env.CONSULTA_DIABETE_API_REPO
          ),
          "process.env.CONSULTA_DIABETE_API_DOC": JSON.stringify(
            process.env.CONSULTA_DIABETE_API_DOC
          ),
          "process.env.DISCORD_LINK": JSON.stringify(process.env.DISCORD_LINK),
          "process.env.EMAIL": JSON.stringify(process.env.EMAIL),
          "process.env.LINKEDIN_PROFILE_LINK": JSON.stringify(
            process.env.LINKEDIN_PROFILE_LINK
          ),
          "process.env.FINANCAS_REPO": JSON.stringify(
            process.env.FINANCAS_REPO
          ),
          "process.env.FINANCAS_GOOGLE_PLAY": JSON.stringify(
            process.env.FINANCAS_GOOGLE_PLAY
          ),
          "process.env.FORTUNE_COOKIE_REPO": JSON.stringify(
            process.env.FORTUNE_COOKIE_REPO
          ),
          "process.env.FORTUNE_COOKIE_GOOGLE_PLAY": JSON.stringify(
            process.env.FORTUNE_COOKIE_GOOGLE_PLAY
          ),
          "process.env.DIARIAS_REPO": JSON.stringify(process.env.DIARIAS_REPO),
          "process.env.DIARIAS_SITE": JSON.stringify(process.env.DIARIAS_SITE),
          "process.env.LIB_GOOGLE_SIGNIN": JSON.stringify(
            process.env.LIB_GOOGLE_SIGNIN
          ),
          "process.env.GAMESTATE_REPO": JSON.stringify(
            process.env.GAMESTATE_REPO
          ),
          "process.env.GAMESTATE_GOOGLE_PLAY": JSON.stringify(
            process.env.GAMESTATE_GOOGLE_PLAY
          ),
          "process.env.FOODFACIL_WEB": JSON.stringify(
            process.env.FOODFACIL_WEB
          ),
          "process.env.FOODFACIL_WEB_REPO": JSON.stringify(
            process.env.FOODFACIL_WEB_REPO
          ),
          "process.env.FOODFACIL_API_DOC": JSON.stringify(
            process.env.FOODFACIL_API_DOC
          ),
          "process.env.FOODFACIL_API_REPO": JSON.stringify(
            process.env.FOODFACIL_API_REPO
          ),
          "process.env.SWIPABLE_MODAL_REPO": JSON.stringify(
            process.env.SWIPABLE_MODAL_REPO
          ),
          "process.env.TASKS_API_REPO": JSON.stringify(
            process.env.TASKS_API_REPO
          ),
          "process.env.CURRENCY_VISUAL_TRANSFORMATION_REPO": JSON.stringify(
            process.env.CURRENCY_VISUAL_TRANSFORMATION_REPO
          ),
        },
      }),
      enforce: "pre",
    },
  ],
});
