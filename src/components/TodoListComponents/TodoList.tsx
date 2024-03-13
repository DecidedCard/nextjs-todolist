"use client";

import useTodoQuery from "@/hook/useTodoQuery";

const TodoList = () => {
  const { todoList, isError, isLoading, updateMutate, deleteMutate } =
    useTodoQuery();
  if (isLoading) {
    return <>로딩중입니다...</>;
  }

  if (isError) {
    return <>에러!</>;
  }

  return (
    <section>
      {todoList?.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.contents}</p>
            <button onClick={() => updateMutate(item)}>
              {item.isDone ? "취소" : "완료"}
            </button>
            <button onClick={() => deleteMutate(item)}>삭제</button>
          </div>
        );
      })}
    </section>
  );
};

export default TodoList;
