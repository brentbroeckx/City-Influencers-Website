import { Admin } from "./admin";
import { DefaultApiResponse } from "./defaultApiResponse";

export interface AdminApiResponse extends DefaultApiResponse {
    data: Array<Admin>
}