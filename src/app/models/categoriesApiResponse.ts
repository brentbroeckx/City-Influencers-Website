import { Category } from "./category";
import { DefaultApiResponse } from "./defaultApiResponse";

export interface CategoriesApiResponse extends DefaultApiResponse {
    data: Array<Category>
}