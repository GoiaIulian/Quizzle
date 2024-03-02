import * as React from 'react';

export const useApi = <T>() => {
    const [response, setResponse] = React.useState<T | undefined>(undefined);

    const fetchData = (url: string) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data.response_code === 0) {
                    setResponse(data as T);
                }
            });
    };

    return { response, fetchData };
};
