import { DefaultApiResponse } from "../models/defaultApiResponse";
import { TokenValidation } from "./tokenValidation";

export interface TokenValidationResponse extends DefaultApiResponse {
    data: TokenValidation
}