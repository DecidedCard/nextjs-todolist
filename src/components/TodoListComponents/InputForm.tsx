import useTodoInputForm from "@/hook/useTodoInputForm";
import React from "react";

const InputForm = () => {
  const { title, onChamgeTitleHandler, contents, onChamgeContentsHandler } =
    useTodoInputForm();
  return (
    <form onSubmit={(e) => {}}>
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
    </form>
  );
};

export default InputForm;
