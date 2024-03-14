"use client";

import Error from "@/components/Error";
import Loading from "@/components/Loading";
import InputForm from "@/components/TodoListComponents/InputForm";
import ReportNavigateButton from "@/components/TodoListComponents/ReportNavigateButton";
import TodoList from "@/components/TodoListComponents/TodoList";
import useTodoQuery from "@/hook/useTodoQuery";
import React from "react";

const TodoCSRPage = () => {
  const { todoList, isError, isLoading } = useTodoQuery();
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <main>
      <div className="text-center">
        <ReportNavigateButton />
      </div>
      <InputForm />
      <TodoList todoList={todoList} isActive={false} />
      <TodoList todoList={todoList} isActive={true} />
    </main>
  );
};

export default TodoCSRPage;
