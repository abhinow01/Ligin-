import type {Token , ColorToken, SpacingToken,} from "../types/token.js";
import { FigmaResponse } from "../figma/types.js";

export class FigmaNormalizer {
    normalize(response : FigmaResponse) : Token[]{
        const tokens : Token[] = [];
        for (const variable of response.variables){
            switch(variable.resolvedType){
                case "COLOR":
                    tokens.push({
                        id: variable.id,
                        name: variable.name,
                        type: "color",
                        value : variable.value as string
                    } as ColorToken);
                    break;
        case "FLOAT":
          tokens.push({
            id: variable.id,
            name: variable.name,
            type: "spacing",
            value: variable.value as number,
          } as SpacingToken);
        break;
        default:
          console.warn(
            `Skipping unsupported token type: ${variable.resolvedType}`
          );
            }
        }
        return tokens
    }
}