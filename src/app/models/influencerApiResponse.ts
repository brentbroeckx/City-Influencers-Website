import { Influencer } from "./influencer";

export interface InfluencerApiResponse {
    code: number;
    message: String;
    data: Array<Influencer>;
}