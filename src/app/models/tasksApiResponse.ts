import { DefaultApiResponse } from "./defaultApiResponse";
import { Task } from "./task";

export interface TaskApiResponse extends DefaultApiResponse {
    data: Array<Task>;
}