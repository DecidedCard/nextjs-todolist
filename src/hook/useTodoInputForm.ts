import React from "react";
import useInput from "./useInput";

const useTodoInputForm = () => {
  const [title, onChamgeTitleHandler, setTitle] = useInput();
  const [contents, onChamgeContentsHandler, setContents] = useInput();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !contents) {
      alert("제목과 내용을 입력해주시기 바랍니다.");
      return;
    }
    const newTodo = () => {};
  };

  return { title, onChamgeTitleHandler, contents, onChamgeContentsHandler };
};

export default useTodoInputForm;
