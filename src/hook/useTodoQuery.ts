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

  const useUpdateMutation = () => {
    const { mutate: updateMutate } = useMutation({
      mutationFn: async (Todo: TodoType) => {
        await fetch("http://localhost:3000/api/todoList", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(Todo),
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey });
      },
    });
    return updateMutate;
  };

  const updateMutate = useUpdateMutation();

  const useDeleteMutation = () => {
    const { mutate: deleteMutate } = useMutation({
      mutationFn: async (item: TodoType) => {
        await fetch("http://localhost:3000/api/todoList", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(item),
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey });
      },
    });
    return deleteMutate;
  };

  const deleteMutate = useDeleteMutation();

  return {
    todoList,
    isError,
    isLoading,
    addMutate,
    updateMutate,
    deleteMutate,
  };
};

export default useTodoQuery;
