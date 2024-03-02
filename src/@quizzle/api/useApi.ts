import React from 'react';
import { Quizz } from './types';

export const useApi = () => {
    const [response, setResponse] = React.useState<Quizz | undefined>(undefined);

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10')
            .then((res) => res.json())
            .then((data) => {
                if (data.response_code === 0) {
                    setResponse(data as Quizz);
                }
            });
    }, []);

    return response;
};
