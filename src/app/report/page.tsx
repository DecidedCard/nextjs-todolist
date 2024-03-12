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
    <main>
      <div>
        <h2>
          <label>TodoList 합계: </label>
          {todoList.totalTodoList}
        </h2>
        <p>
          <label>TodoList Working: </label>
          {todoList.working}
        </p>
        <p>
          <label>TodoList Done: </label>
          {todoList.done}
        </p>
      </div>
    </main>
  );
};

export default ReportPage;
