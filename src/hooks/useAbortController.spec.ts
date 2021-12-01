import { act, renderHook } from "@testing-library/react-hooks";
import { useAbortController } from "./useAbortController";

function fetchData(signal: AbortSignal) {
  return () => (signal.aborted ? "aborted" : "data from the server");
}

function fetchDataAsync(signal: AbortSignal): () => Promise<string> {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        if (!signal.aborted) {
          resolve("data from the server");
        } else {
          resolve("aborted");
        }
      }, 2000);
    });
}

describe("useAbortController", () => {
  it("returns an array", () => {
    const test = renderHook(() => useAbortController(fetchData));
    expect(test.result.current[0]).toBeDefined();
    expect(test.result.current[1]).toBeDefined();
  });

  it("the first method call the function passed", () => {
    const test = renderHook(() => useAbortController(fetchData));

    const data = test.result.current[0]();
    expect(data).toBe("data from the server");
  });

  it("the second method `abort` the function", () => {
    const test = renderHook(() => useAbortController(fetchData));

    // abort before and then call, just to know the value of the signal
    act(() => test.result.current[1].abort());

    const data = test.result.current[0]();
    expect(data).toBe("aborted");
  });

  describe("if the function is async, it receives the signal aborted correctly if called", () => {
    it(": NOT aborted", async () => {
      const test = renderHook(() => useAbortController(fetchDataAsync));

      expect(test.result.current[1].signal.aborted).toBeFalsy();

      const data = await test.result.current[0]();

      expect(data).toBe("data from the server");
    });

    it(": aborted", async () => {
      const test = renderHook(() => useAbortController(fetchDataAsync));

      expect(test.result.current[1].signal.aborted).toBeFalsy();

      // abort called explicity
      test.result.current[1].abort();

      expect(test.result.current[1].signal.aborted).toBeTruthy();

      const data = await test.result.current[0]();

      expect(data).toBe("aborted");
    });
  });
});
