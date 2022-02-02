import { DefaultApiResponse } from "./defaultApiResponse";
import { Dictionary } from "./dictionary";

export interface CityListResponse extends DefaultApiResponse {
    data: Dictionary<string>
}