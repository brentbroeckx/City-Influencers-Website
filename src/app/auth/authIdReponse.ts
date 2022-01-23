export interface AuthIdResponse {
    code: number;
    message: string;
    data: {
        id: string;
    }
}