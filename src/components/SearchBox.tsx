import React, { useCallback, useEffect, useState } from 'react';

import { InputProps } from '../type/input';

export function SearchBox(props: InputProps<string>) {
  const [value, setValue] = useState<string>(props.value || "");

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
