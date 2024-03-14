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
      const res = await fetch("http://localhost:3000/api/todoList/");
      const { todoList }: TodoListType = await res.json();
      return todoList;
    },
    retry: 0,
    refetchOnWindowFocus: false,
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
      mutationFn: async ({ id, isDone }: { id: string; isDone: boolean }) => {
        await fetch(`http://localhost:3000/api/todoList/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ isDone: !isDone }),
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
      mutationFn: async (id: string) => {
        await fetch(`http://localhost:3000/api/todoList/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
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
