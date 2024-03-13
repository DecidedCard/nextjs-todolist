import InputForm from "@/components/TodoListComponents/InputForm";
import ReportNavigateButton from "@/components/TodoListComponents/ReportNavigateButton";
import TodoList from "@/components/TodoListComponents/TodoList";
import React from "react";

const TodoCSRPage = () => {
  return (
    <main>
      <div className="text-center">
        <ReportNavigateButton />
      </div>
      <InputForm />
      <TodoList isActive={false} />
      <TodoList isActive={true} />
    </main>
  );
};

export default TodoCSRPage;
