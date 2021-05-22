import { useEffect, useState } from 'react';

export function useLocalStorage<T extends object>(
  key: string,
  defaultValue?: T
): [T | null, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T | null>(
    defaultValue || null
  );

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      item ? setStoredValue(JSON.parse(item)) : setStoredValue(null);
    } catch (error) {
      console.log(`Error in setting the key: ${key}`, error);
      setStoredValue(defaultValue || null);
      if (defaultValue)
        window.localStorage.setItem(key, JSON.stringify(defaultValue));
    }
  }, [key, setStoredValue]);

  const setValue = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.log(`Error in setting the key: ${key}`, error);
    }
  };

  return [storedValue, setValue];
}
