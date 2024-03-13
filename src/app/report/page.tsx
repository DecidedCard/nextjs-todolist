import { TodoListType } from "@/types";
import React from "react";

const ReportPage = async () => {
  const res = await fetch("http://localhost:3000/api/todoList", {
    next: {
      revalidate: 10,
    },
  });

  const todoList: TodoListType = await res.json();

  return (
    <main className="flex justify-center mt-10">
      <div className="flex flex-col justify-evenly h-96">
        <h2 className="text-3xl text-white">
          <label>TodoList 합계: </label>
          {todoList.totalTodoList}
        </h2>
        <p className="text-2xl text-white">
          <label>TodoList Working: </label>
          {todoList.working}
        </p>
        <p className="text-2xl text-white">
          <label>TodoList Done: </label>
          {todoList.done}
        </p>
      </div>
    </main>
  );
};

export default ReportPage;
