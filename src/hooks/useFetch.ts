import { useEffect, useMemo, useState } from "react";

import { GenericError } from "../type/errors";
import { useAbortController } from "./useAbortController";

export type PromiseWithSignal<T> = (signal: AbortSignal) => Promise<T>;

export function useFetch<T>(
  fnToFetch: PromiseWithSignal<T>,
  dependency: unknown[]
): { data?: T; error?: GenericError } {
  const [response, setResponse] = useState<{ data?: T; error?: GenericError }>(
    {}
  );

  const builder = useMemo(
    () => (signal: AbortSignal) => () => fnToFetch(signal),
    dependency
  );

  const [invoke, controller] = useAbortController(builder);

  useEffect(() => {
    setResponse({});
    invoke()
      .then((res) => {
        if (controller.signal.aborted) return;

        setResponse({ data: res });
      })
      .catch((err: GenericError) => {
        setResponse({ error: err });
      });
  }, dependency);

  return response;
}
