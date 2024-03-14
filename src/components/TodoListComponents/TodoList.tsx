"use client";

import useTodoQuery from "@/hook/useTodoQuery";
import { TodoType } from "@/types";

const TodoList = ({
  todoList,
  isActive,
}: {
  todoList: [TodoType] | undefined;
  isActive: boolean;
}) => {
  const { updateMutate, deleteMutate } = useTodoQuery();
  return (
    <div className="min-h-72">
      <h2 className="text-2xl ml-4">{isActive ? "Done!!!" : "Working..."}</h2>
      <section className="flex flex-wrap m-2">
        {todoList
          ?.filter((item) => {
            return item.isDone === isActive;
          })
          .map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between m-2 p-2 min-w-64 min-h-36 rounded-lg border border-solid border-slate-950 bg-opacity-60"
              >
                <h3>{item.title}</h3>
                <p>{item.contents}</p>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() =>
                      updateMutate({ id: item.id, isDone: item.isDone })
                    }
                    className=" w-14 rounded-2xl"
                  >
                    {item.isDone ? "취소" : "완료"}
                  </button>
                  <button
                    onClick={() => deleteMutate(item.id)}
                    className=" w-14 rounded-2xl"
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
