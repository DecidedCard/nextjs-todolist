"use client";

import useTodoInputForm from "@/hook/useTodoInputForm";
import React from "react";

const InputForm = () => {
  const {
    title,
    onChamgeTitleHandler,
    contents,
    onChamgeContentsHandler,
    onSubmitHandler,
  } = useTodoInputForm();
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={onChamgeTitleHandler}
      />
      <input
        type="text"
        placeholder="내용을 입력해주세요"
        value={contents}
        onChange={onChamgeContentsHandler}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default InputForm;
