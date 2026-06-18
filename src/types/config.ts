export interface FigmaConfig {
  accessToken: string;
  fileId: string;
//   outputPath: string;
//   generateCSS?: boolean;
//   generateTailwind?: boolean;
//   generateReact?: boolean;
}

export interface Config {
  figma: FigmaConfig;
  outputPath: string;
  generators: string[];
  validators: string[];
}


