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
    <form
      onSubmit={onSubmitHandler}
      className="flex justify-center items-center gap-10 h-14"
    >
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={onChamgeTitleHandler}
        className="border border-solid border-slate-950 rounded-3xl p-2 w-72 h-10"
      />
      <input
        type="text"
        placeholder="내용을 입력해주세요"
        value={contents}
        onChange={onChamgeContentsHandler}
        className="border border-solid border-slate-950 rounded-3xl p-2 w-72 h-10"
      />
      <button type="submit" className="bg-green-400 w-14 h-7 rounded-2xl">
        등록
      </button>
    </form>
  );
};

export default InputForm;
