import useTodoQuery from "./useTodoQuery";

const useTodoList = () => {
  const { todoList, isError, isLoading } = useTodoQuery();

  return { todoList, isError, isLoading };
};

export default useTodoList;
