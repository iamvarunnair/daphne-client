import { useState } from 'react';

const OPTIONS = {};

type TPropsUseFetch = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
};

type TCallAPI = {
  input?: { [index: string]: any };
  fetchOptions?: RequestInit;
};
export function useFetch<T>({ url, method }: TPropsUseFetch) {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<T | null>(null);

  const callAPI = async ({ input, fetchOptions = {} }: TCallAPI) => {
    setIsLoading(true);

    const response = await fetch(url, {
      method,
      ...OPTIONS,
      ...fetchOptions,
      body: JSON.stringify(input),
    });

    const data = await response.json();

    setIsLoading(false);
    setResponse(data);
  };

  return { isLoading, callAPI, response };
}
