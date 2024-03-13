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

export async function PATCH(request: Request) {
  const { id, isDone } = await request.json();

  const response = await fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isDone: !isDone }),
  });

  const todo = await response.json();
  return Response.json({ todo });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });

  const todo = await response.json();
  return Response.json({ todo });
}
