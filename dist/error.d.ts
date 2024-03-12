export declare class APIError extends Error {
    status: number;
    constructor(status: number, message: string);
    private static makeMessage;
}
