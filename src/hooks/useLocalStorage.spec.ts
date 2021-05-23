import { renderHook } from '@testing-library/react-hooks';

import { useLocalStorage } from './useLocalStorage';

const KEY = "TEST";

describe("useLocalStorage tests", () => {
  beforeAll(() => {
    window.localStorage.removeItem(KEY);
  });
  
  it("verifies that it renders with no default value", () => {
    const { result } = renderHook(() => useLocalStorage(KEY));
    expect(result.current[0]).toBe(null);
  });

  it("verifies that it renders with default value", () => {
    const { result } = renderHook(() => useLocalStorage(KEY, ["Charizard"]));
    expect(result.current[0]).toStrictEqual(["Charizard"]);
  });

  afterAll(() => {
    window.localStorage.removeItem(KEY);
  });
});
