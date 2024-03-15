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
              <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.contents}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn"
                      onClick={() => {
                        updateMutate({ id: item.id, isDone: item.isDone });
                      }}
                    >
                      {item.isDone ? "취소" : "완료"}
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => deleteMutate(item.id)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default TodoList;
