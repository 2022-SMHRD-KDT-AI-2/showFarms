import React, { Dispatch, SetStateAction, useCallback, useState } from "react";

type handler = (e: React.ChangeEvent<HTMLInputElement>) => void;
type Return<T> = [T, handler, Dispatch<SetStateAction<T>>];

const useInput = <T>(initValue: T): Return<T> => {
  const [value, setValue] = useState(initValue);
  const onChange = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, onChange, setValue];
};

export default useInput;
