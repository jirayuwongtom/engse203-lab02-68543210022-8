import { defineConfig } from "vite";

// TODO: เปลี่ยนให้ตรงชื่อ repository ของตนเอง เช่น engse203-lab02-67123456789
const repositoryName = "engse203-lab02-68543210022-8";

export default defineConfig({
  base: `/${repositoryName}/`,
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});