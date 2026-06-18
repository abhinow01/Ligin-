import type { Token } from "./token.ts";
/**
 * Every output generator (CSS, Tailwind, React, etc.)
 * implements this interface.
 */
export interface Generator {
  /**
   * Name of the generator.
   * Example: "css", "tailwind", "react"
   */
  name: string;
  outputPath: string;
  /**
   * Generate framework-specific files from tokens.
   */
  generate(tokens: Token[]): Promise<void>;
}