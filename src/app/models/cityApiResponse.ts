import { City } from "./city";
import { DefaultApiResponse } from "./defaultApiResponse";

export interface CityApiResponse extends DefaultApiResponse {
    data: Array<City>;
}