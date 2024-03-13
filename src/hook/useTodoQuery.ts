import { TodoListType, TodoType } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
  });

  const queryClient = useQueryClient();

  const useAddMutation = () => {
    const { mutate: addMutate } = useMutation({
      mutationFn: async (newTodo: Pick<TodoType, "title" | "contents">) => {
        await fetch("http://localhost:3000/api/todoList", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newTodo),
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey });
      },
    });
    return addMutate;
  };

  const addMutate = useAddMutation();

  return { todoList, isError, isLoading, addMutate };
};

export default useTodoQuery;
