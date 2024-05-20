import { promises as fs } from "fs";

export async function readFile(path) {
  try {
    // Verifica se o arquivo existe
    await fs.access(path);
    const data = await fs.readFile(path, "utf8");
    return JSON.parse(data);
  } catch (err) {
    // Se o arquivo não existir, retorna um array vazio
    if (err.code === "ENOENT") {
      await writeFile(path, []);
      return [];
    } else {
      console.error("Erro ao ler arquivo:", err);
      throw err;
    }
  }
}

export async function writeFile(path, data) {
  try {
    const json = JSON.stringify(data);
    await fs.writeFile(path, json, "utf8");
  } catch (err) {
    console.error("Erro ao escrever arquivo:", err);
    throw err;
  }
}
