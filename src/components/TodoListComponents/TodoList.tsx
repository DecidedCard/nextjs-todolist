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
                className="border border-solid border-slate-950 w-64 rounded-lg m-2 p-2"
              >
                <h3>{item.title}</h3>
                <p>{item.contents}</p>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => updateMutate(item)}
                    className="bg-green-400 w-14 rounded-2xl"
                  >
                    {item.isDone ? "취소" : "완료"}
                  </button>
                  <button
                    onClick={() => deleteMutate(item)}
                    className="bg-red-500 w-14 rounded-2xl"
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default TodoList;
