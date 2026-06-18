import type { Token } from "./token.ts";

/**
 * Represents a single validation error.
 */
export interface ValidationError {
  tokenId: string;
  message: string;
}

/**
 * Represents the result of validating a collection of tokens.
 */
export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

/**
 * Every validator must implement this interface.
 */
export interface Validator {
  name: string;

  validate(tokens: Token[]): ValidationResult;
}