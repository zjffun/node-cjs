import { fileURLToPath } from "node:url";
import path from "node:path";

const cjs = (importmeta) => {
  const __filename = fileURLToPath(importmeta.url);
  const __dirname = path.dirname(fileURLToPath(importmeta.url));

  return { __filename, __dirname };
};

export default cjs;
