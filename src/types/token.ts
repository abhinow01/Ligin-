// src/types/token.ts

/**
 * Every supported design token category.
 * Extend this as new token types are supported.
 */
export type TokenType =
  | "color"
  | "spacing"
  | "typography"
  | "radius"
  | "shadow"
  | "opacity"
  | "fontFamily"
  | "fontWeight"
  | "lineHeight"
  | "letterSpacing"
  | "duration"
  | "easing";

/**
 * Metadata that comes from the design source (Figma).
 * None of these fields are required because
 * not every source provides all metadata.
 */
export interface TokenMetadata {
  description?: string;

  /** Figma variable id */
  sourceId?: string;

  /** Variable collection name */
  collection?: string;

  /** e.g. Light / Dark */
  mode?: string;

  /** Original Figma variable name */
  originalName?: string;

  /** Future-proofing */
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Base interface shared by every token.
 */
export interface BaseToken<TValue> {
  id: string;

  /**
   * Canonical token name.
   * Example:
   * color.primary
   * spacing.md
   * typography.heading.lg
   */
  name: string;

  type: TokenType;

  value: TValue;

  metadata?: TokenMetadata;
}

/* ===========================================================
   TOKEN TYPES
   =========================================================== */

export type ColorToken = BaseToken<string> & {
  type: "color";
};

export type SpacingToken = BaseToken<number> & {
  type: "spacing";
};

export type RadiusToken = BaseToken<number> & {
  type: "radius";
};

export interface ShadowValue {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
}

export type ShadowToken = BaseToken<ShadowValue> & {
  type: "shadow";
};

export interface TypographyValue {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
  letterSpacing?: number;
}

export type TypographyToken = BaseToken<TypographyValue> & {
  type: "typography";
};

export type OpacityToken = BaseToken<number> & {
  type: "opacity";
};

export type FontFamilyToken = BaseToken<string> & {
  type: "fontFamily";
};

export type FontWeightToken = BaseToken<number> & {
  type: "fontWeight";
};

export type LineHeightToken = BaseToken<number> & {
  type: "lineHeight";
};

export type LetterSpacingToken = BaseToken<number> & {
  type: "letterSpacing";
};

export type DurationToken = BaseToken<number> & {
  type: "duration";
};

export type EasingToken = BaseToken<string> & {
  type: "easing";
};

/**
 * The canonical token object used throughout the application.
 *
 * Every module (validator, generator, diff engine)
 * communicates using this union type.
 */
export type Token =
  | ColorToken
  | SpacingToken
  | RadiusToken
  | ShadowToken
  | TypographyToken
  | OpacityToken
  | FontFamilyToken
  | FontWeightToken
  | LineHeightToken
  | LetterSpacingToken
  | DurationToken
  | EasingToken;