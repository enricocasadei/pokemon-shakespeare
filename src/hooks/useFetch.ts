import { useEffect, useMemo, useState } from 'react';

import { useAbortController } from './useAbortController';

export type PromiseWithSignal<T> = (signal: AbortSignal) => Promise<T>;

export function useFetch<T>(
  fnToFetch: PromiseWithSignal<T>,
  dependency?: unknown[]
): { data: T | undefined; error: unknown | undefined } {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<unknown | undefined>();
  const builder = useMemo(
    () => (signal: AbortSignal) => () => fnToFetch(signal),
    dependency || []
  );

  const [invoke, controller] = useAbortController(builder);

  useEffect(() => {
    invoke()
      .then((res) => {
        if (controller.signal.aborted) return;

        setData(res);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }, dependency || []);

  return { data, error };
}
