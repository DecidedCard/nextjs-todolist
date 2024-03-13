"use client";

import useTodoList from "@/hook/useTodoList";

const TodoList = () => {
  const { todoList, isError, isLoading } = useTodoList();
  if (isLoading) {
    return <>로딩중입니다...</>;
  }

  if (isError) {
    return <>에러!</>;
  }

  console.log(todoList);

  return (
    <section>
      {todoList?.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.contents}</p>
            <button>{item.isDone ? "취소" : "완료"}</button>
            <button>삭제</button>
          </div>
        );
      })}
    </section>
  );
};

export default TodoList;
