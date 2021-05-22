import { useEffect, useMemo, useRef } from 'react';

export function useAbortController<T>(fn: (signal: AbortSignal) => T): [T, AbortController] {
  const controller = useRef<AbortController>(new AbortController());
  const withSignal = useMemo(() => fn(controller.current.signal), [controller.current.signal, fn]);

  useEffect(() => {
    const ctrl = controller.current;
    return () => ctrl.abort();
  }, []);

  return [withSignal, controller.current];
}
