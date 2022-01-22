export interface AuthTokenResponse {
    code: number;
    message: string;
    error: string;
    data: {
        token: string;
        creationTime: Date;
        expireTime: Date;
    }

}