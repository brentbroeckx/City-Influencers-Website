import { DefaultApiResponse } from "./defaultApiResponse";
import { Influencer } from "./influencer";

export interface InfluencerApiResponse extends DefaultApiResponse {
    data: Array<Influencer>;
}