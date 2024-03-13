import InputForm from "@/components/TodoListComponents/InputForm";
import TodoList from "@/components/TodoListComponents/TodoList";
import React from "react";

const TodoCSRPage = () => {
  return (
    <main>
      <InputForm />
      <TodoList />
    </main>
  );
};

export default TodoCSRPage;
