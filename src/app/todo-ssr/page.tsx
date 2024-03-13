import { TodoListType } from "@/types";
import React from "react";

const TodoSSRPage = async () => {
  const res = await fetch("http://localhost:3000/api/todoList", {
    cache: "no-cache",
  });
  const { todoList }: TodoListType = await res.json();

  return (
    <main>
      {todoList.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.contents}</p>
          </div>
        );
      })}
    </main>
  );
};

export default TodoSSRPage;
