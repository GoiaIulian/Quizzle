import { Quizz } from '@quizzle/models';
import { ApiContentType, ApiError, ApiHeaders, ApiRequestMethod } from './types';

/* eslint-disable @typescript-eslint/naming-convention */
const BASE_URL = 'https://opentdb.com';

export class Api {
    private static buildUrl(path: string, params?: URLSearchParams) {
        if (params) {
            return `${BASE_URL}/${path}?${params.toString()}`;
        }

        return `${BASE_URL}/${path}`;
    }

    private static async buildHeaders() {
        const headers = {
            [ApiHeaders.CONTENT_TYPE]: ApiContentType.APPLICATION_JSON,
        };

        return headers;
    }

    private static isSuccessResponse(response: Response) {
        return response.status >= 200 && response.status < 400;
    }

    private static async handleError(response: Response) {
        throw new ApiError(response.status);
    }

    private static async handleResponse<T>(response: Response): Promise<T> {
        const contentType = response.headers.get(ApiHeaders.CONTENT_TYPE);
        if (contentType && contentType.indexOf(ApiContentType.APPLICATION_JSON) !== -1) {
            return (await response.json()) as T;
        }

        return (await response.text()) as unknown as T;
    }

    private async get<T>(path: string, params?: URLSearchParams): Promise<T> {
        const response = await fetch(Api.buildUrl(path, params), {
            method: ApiRequestMethod.GET,
            // headers: await Api.buildHeaders(),
        });

        if (!Api.isSuccessResponse(response)) {
            await Api.handleError(response);
        }

        return Api.handleResponse<T>(response);
    }

    async fecthQuizz() {
        return await this.get<Quizz>('api.php?amount=10');
    }
}
