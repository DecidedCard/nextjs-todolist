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
      <div className="flex justify-center">
        <Link href={"/report"}>TodoList 통계보러가기</Link>
      </div>
      <div className="min-h-72">
        <h2 className="text-2xl ml-4">Working...</h2>
        <section className="flex flex-wrap m-2">
          {todoList
            .filter((item) => {
              return item.isDone === false;
            })
            .map((item) => {
              return (
                <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.contents}</p>
                  </div>
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
                <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.contents}</p>
                  </div>
                </div>
              );
            })}
        </section>
      </div>
    </main>
  );
};

export default TodoSSRPage;
