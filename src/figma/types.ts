export interface FigmaVariable {
    id: string;
    name:string;
    resolvedType : string;
    value : string | number 
}
export interface FigmaResponse {
    variables  : FigmaVariable[];
}
