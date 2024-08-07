import * as React from 'react';
import { Api } from './api';
import { Question } from '@quizzle/models';

export const useApi = () => {
    const [response, setResponse] = React.useState<Question[] | undefined>(undefined);

    const api = new Api();
    const fetchData = () => {
        api.fecthQuizz().then((quizz) => {
            setResponse(quizz);
        });
    };

    return { response, fetchData };
};
