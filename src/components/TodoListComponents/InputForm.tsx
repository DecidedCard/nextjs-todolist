"use client";

import useTodoInputForm from "@/hook/useTodoInputForm";
import React from "react";

const InputForm = () => {
  const {
    title,
    onChangeTitleHandler,
    contents,
    onChangeContentsHandler,
    onSubmitHandler,
  } = useTodoInputForm();
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col justify-between items-center m-2 p-2 h-32"
    >
      <h2 className="text-2xl text-white">TodoList를 작성해 주세요!</h2>
      <div className="flex items-center gap-10">
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={onChangeTitleHandler}
          className="border border-solid border-slate-950 rounded-3xl p-2 w-72 h-10"
        />
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          value={contents}
          onChange={onChangeContentsHandler}
          className="border border-solid border-slate-950 rounded-3xl p-2 w-72 h-10"
        />
        <button type="submit" className="bg-green-400 w-14 h-7 rounded-2xl">
          등록
        </button>
      </div>
    </form>
  );
};

export default InputForm;
