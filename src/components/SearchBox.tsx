import React, { useCallback, useEffect, useState } from 'react';

export function SearchBox(props: {
  onChange: (value: string) => void;
  value?: string;
}) {
  const [value, setValue] = useState<string>(props.value || "");
  // eslint-disable-next-line
  const delayedSet = useCallback<(args: string) => void>(
    debounce<string>(props.onChange, 500),
    [props.onChange, debounce]
  );
  useEffect(() => {
    delayedSet(value);
  }, [value, delayedSet]);

  return (
    <input onChange={(e) => setValue(e.target.value || "")} value={value} />
  );
}

function debounce<T = any>(func: (args: T) => void, wait: number) {
  let timeout: undefined | number;
  return function (args: T) {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => func(args), wait);
  };
}
