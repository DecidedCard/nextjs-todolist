import InputForm from "@/components/TodoListComponents/InputForm";
import TodoList from "@/components/TodoListComponents/TodoList";
import React from "react";

const TodoCSRPage = () => {
  return (
    <main>
      <InputForm />
      <TodoList isActive={false} />
      <TodoList isActive={true} />
    </main>
  );
};

export default TodoCSRPage;
