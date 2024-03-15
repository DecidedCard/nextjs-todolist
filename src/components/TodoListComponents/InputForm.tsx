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
      <h2 className="text-2xl">TodoList를 작성해 주세요!</h2>
      <div className="flex items-center gap-10">
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={onChangeTitleHandler}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="내용을 입력해주세요"
          value={contents}
          onChange={onChangeContentsHandler}
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn btn-active btn-primary btn-sm">
          등록
        </button>
      </div>
    </form>
  );
};

export default InputForm;
