import { City } from "./city";

export interface CityApiResponse {
    code: number;
    message: String;
    data: Array<City>;
}