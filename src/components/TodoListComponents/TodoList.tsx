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
    <div className="min-h-72">
      <h2 className="text-2xl">{isActive ? "Done!!!" : "Working..."}</h2>
      <section className="flex flex-wrap m-2">
        {todoList
          ?.filter((item) => {
            return item.isDone === isActive;
          })
          .map((item) => {
            return (
              <div
                key={item.id}
                className="border border-solid border-slate-950 w-64 rounded-lg m-2"
              >
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
    </div>
  );
};

export default TodoList;
