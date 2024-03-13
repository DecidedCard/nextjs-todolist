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

  return (
    <section>
      {todoList?.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.contents}</p>
          </div>
        );
      })}
    </section>
  );
};

export default TodoList;
