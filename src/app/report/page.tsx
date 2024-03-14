import { TodoType } from "@/types";
import React from "react";

const ReportPage = async () => {
  const res = await fetch("http://localhost:4000/todos", {
    next: {
      revalidate: 10,
    },
  });
  const todoList = await res.json();

  const totalTodoList = todoList.length;
  const working = todoList.filter(
    (item: TodoType) => item.isDone === false
  ).length;
  const done = todoList.filter((item: TodoType) => item.isDone === true).length;

  return (
    <main className="flex justify-center mt-10">
      <div className="flex flex-col justify-evenly h-96">
        <h2 className="text-3xl">
          <label>작성한 TodoList 합계: </label>
          {totalTodoList}
        </h2>
        <p className="text-2xl">
          <label>진행중인 Todo Working...: </label>
          {working}
        </p>
        <p className="text-2xl">
          <label>완료한 Todo Done: </label>
          {done}
        </p>
      </div>
    </main>
  );
};

export default ReportPage;
