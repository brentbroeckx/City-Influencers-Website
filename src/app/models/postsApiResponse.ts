import { DefaultApiResponse } from "./defaultApiResponse";
import { Post } from "./post";

export interface PostsApiResponse extends DefaultApiResponse {
    data: Array<Post>;
}