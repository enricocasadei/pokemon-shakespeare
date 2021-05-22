import { renderHook } from '@testing-library/react-hooks';

import { useFetch } from './useFetch';

describe("useFetch", () => {
  it("makes the result to change: from undefined to the value retrieve ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<string>(fetchDataAsync, [])
    );

    expect(result.current.data).toBeUndefined();
    await waitForNextUpdate();
    expect(result.current.data).toEqual("data from the server");
  });

  it("makes the result to change: from undefined to the value retrieve ", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch<string>(fetchDataFailed, [])
    );

    expect(result.current.data).toBeUndefined();
    await waitForNextUpdate();
    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeDefined();
  });
});

function fetchDataAsync(signal: AbortSignal): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!signal.aborted) {
        resolve("data from the server");
      } else {
        resolve("aborted");
      }
    }, 2000);
  });
}

function fetchDataFailed(signal: AbortSignal): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("generic error"));
    }, 2000);
  });
}
