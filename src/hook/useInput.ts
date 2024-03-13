import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, onChangeHandler, setValue] as const;
};

export default useInput;
