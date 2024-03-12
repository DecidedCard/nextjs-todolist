import { TodoType } from "@/types";

const url = "http://localhost:4000/todos";

export async function GET(request: Request) {
  const res = await fetch(url);
  const todoList = await res.json();

  return Response.json({
    todoList,
    totalTodoList: todoList.length,
    working: todoList.filter((item: TodoType) => item.isDone === false).length,
    done: todoList.filter((item: TodoType) => item.isDone === true).length,
  });
}
