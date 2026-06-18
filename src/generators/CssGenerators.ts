import fs from "fs/promises";
import path from "path";

import type { Generator } from "../types/generator.js";
import type { Token } from "../types/token.js";

export class CssGenerator implements Generator {
  name = "css";

  outputPath = "./generated";

  async generate(tokens: Token[]): Promise<void> {
    let css = ":root {\n";

    for (const token of tokens) {
      const variableName = token.name.replace(/\./g, "-");

      let value = token.value;

      // Add px for numeric values
      if (typeof value === "number") {
        value = `${value}px`;
      }

      css += `  --${variableName}: ${value};\n`;
    }

    css += "}\n";

    await fs.mkdir(this.outputPath, { recursive: true });

    const outputFile = path.join(this.outputPath, "variables.css");

    await fs.writeFile(outputFile, css);

    console.log(`Generated ${outputFile}`);
  }
}