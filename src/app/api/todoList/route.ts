import { TodoType } from "@/types";

const url = "http://localhost:4000/todos";

export async function GET(request: Request) {
  const res = await fetch(url, { cache: "no-cache" });
  const todoList = await res.json();

  if (!todoList) {
    return new Response("Todo not found", { status: 404 });
  }

  return new Response(JSON.stringify({ todoList }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
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

  if (!response.ok) {
    return new Response(
      JSON.stringify({ message: "데이터를 저장하지 못 했습니다." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  if (!title || !contents) {
    return new Response(
      JSON.stringify({ message: "제목과 내용이 없습니다." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(
    JSON.stringify({ message: "데이터를 성공적으로 저장하였습니다." }),
    {
      status: 201,
    }
  );
}
