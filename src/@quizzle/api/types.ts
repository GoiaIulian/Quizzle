export enum ApiRequestMethod {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

export enum ApiHeaders {
    AUTHORIZATION = 'Authorization',
    CONTENT_TYPE = 'Content-Type',
    API_KEY = 'X-Api-Key',
}

export enum ApiContentType {
    APPLICATION_JSON = 'application/json',
    TEXT_PLAIN = 'test/plain',
    MULTIPART_FORM_DATA = 'multipart/form-data',
}

export class ApiError extends Error {
    public status: number;

    constructor(status: number) {
        super();
        this.status = status;
    }

    static isAuthError(error: ApiError) {
        return error.status === 401 || error.status === 403;
    }
}
