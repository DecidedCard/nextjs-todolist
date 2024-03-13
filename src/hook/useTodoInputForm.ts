import React from "react";
import useInput from "./useInput";
import useTodoQuery from "./useTodoQuery";

const useTodoInputForm = () => {
  const [title, onChamgeTitleHandler, setTitle] = useInput();
  const [contents, onChamgeContentsHandler, setContents] = useInput();
  const { addMutate } = useTodoQuery();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !contents) {
      alert("제목과 내용을 입력해주시기 바랍니다.");
      return;
    }
    const newTodo = {
      title,
      contents,
    };
    addMutate(newTodo);
    setTitle("");
    setContents("");
  };

  return {
    title,
    onChamgeTitleHandler,
    contents,
    onChamgeContentsHandler,
    onSubmitHandler,
  };
};

export default useTodoInputForm;
