// @ts-check
import { defineConfig } from "astro/config";
import fs from "node:fs";

export default defineConfig({
  vite: {
    server: {
      https: {
        // Add your own ssl certificates if you want to test it
        key: fs.readFileSync("./ssl-certificates/key.pem"),
        cert: fs.readFileSync("./ssl-certificates/certificate.pem"),
      },
    },
  },
});
