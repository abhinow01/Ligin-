import { Token } from "../types/token.js";
export interface Source {
    load(): Promise<Token[]>;
}