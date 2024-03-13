import { TodoListType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const queryKey = ["todoList"];
const useTodoQuery = () => {
  const {
    data: todoList,
    isError,
    isLoading,
  } = useQuery({
    queryKey,
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/api/todoList");
      const { todoList }: TodoListType = await res.json();
      return todoList;
    },
    retry: 0,
    refetchOnWindowFocus: false,
  });

  return { todoList, isError, isLoading };
};

export default useTodoQuery;
