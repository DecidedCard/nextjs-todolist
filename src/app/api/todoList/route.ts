import { TodoType } from "@/types";

const url = "http://localhost:4000/todos";

export async function GET(request: Request) {
  const res = await fetch(url, { cache: "no-cache" });
  const todoList = await res.json();

  if (!todoList) {
    return new Response("todos not found", { status: 404 });
  }

  return Response.json({
    todoList,
    totalTodoList: todoList.length,
    working: todoList.filter((item: TodoType) => item.isDone === false).length,
    done: todoList.filter((item: TodoType) => item.isDone === true).length,
  });
}

export async function POST(request: Request) {
  const { title, contents } = await request.json();

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, contents, isDone: false }),
  });

  const todo = await response.json();
  return Response.json({ todo });
}
