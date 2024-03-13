"use client";

import useTodoQuery from "@/hook/useTodoQuery";

const TodoList = ({ isActive }: { isActive: boolean }) => {
  const { todoList, isError, isLoading, updateMutate, deleteMutate } =
    useTodoQuery();
  if (isLoading) {
    return <>로딩중입니다...</>;
  }

  if (isError) {
    return <>에러!</>;
  }

  return (
    <>
      <h2>{isActive ? "Done!!!" : "Working..."}</h2>
      <section>
        {todoList
          ?.filter((item) => {
            return item.isDone === isActive;
          })
          .map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.contents}</p>
                <button onClick={() => updateMutate(item)}>
                  {item.isDone ? "취소" : "완료"}
                </button>
                <button onClick={() => deleteMutate(item)}>삭제</button>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default TodoList;
