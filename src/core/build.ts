import fs from "fs/promises";

import type { Token } from "../types/token.js";
import type { Generator } from "../types/generator.js";

import { CssGenerator } from "../generators/CssGenerators.js";

export async function build(): Promise<void> {
  console.log("🚀 Starting build...\n");

  // Read token file
  const file = await fs.readFile("./fixtures/tokens.json", "utf-8");

  // Parse JSON into Token[]
  const tokens: Token[] = JSON.parse(file);

  // Register generators
  const generators: Generator[] = [
    new CssGenerator()
  ];

  // Run all generators
  for (const generator of generators) {
    console.log(`Running ${generator.name} generator...`);
    await generator.generate(tokens);
  }

  console.log("\n✅ Build completed successfully.");
}