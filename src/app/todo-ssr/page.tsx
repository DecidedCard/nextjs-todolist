import { TodoType } from "@/types";
import Link from "next/link";
import React from "react";

const TodoSSRPage = async () => {
  const res = await fetch("http://localhost:4000/todos", {
    cache: "no-cache",
  });
  const todoList: TodoType[] = await res.json();

  return (
    <main>
      <Link href={"/report"}>
        <p className="flex justify-center items-center bg-green-400 w-52 h-9 rounded-xl opacity-90 mx-auto">
          TodoList 통계보러가기
        </p>
      </Link>

      <div className="min-h-72">
        <h2 className="text-2xl ml-4">Working...</h2>
        <section className="flex flex-wrap m-2">
          {todoList
            .filter((item) => {
              return item.isDone === false;
            })
            .map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-between m-2 p-2 min-w-64 min-h-36 rounded-lg border border-solid border-slate-950 bg-amber-100 bg-opacity-60"
                >
                  <h2>{item.title}</h2>
                  <p>{item.contents}</p>
                </div>
              );
            })}
        </section>
      </div>
      <div className="min-h-72">
        <h2 className="text-2xl ml-4">Done!</h2>
        <section className="flex flex-wrap m-2">
          {todoList
            .filter((item) => {
              return item.isDone === true;
            })
            .map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-between m-2 p-2 min-w-64 min-h-36 rounded-lg border border-solid border-slate-950 bg-amber-100 bg-opacity-60"
                >
                  <h2>{item.title}</h2>
                  <p>{item.contents}</p>
                </div>
              );
            })}
        </section>
      </div>
    </main>
  );
};

export default TodoSSRPage;
