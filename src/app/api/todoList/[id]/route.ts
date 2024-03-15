const url = "http://localhost:4000/todos";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { isDone } = await request.json();

  const response = await fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isDone }),
  });

  if (!id || !isDone) {
    return new Response(
      JSON.stringify({ message: "id와 isDone이 없습니다." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  if (!response.ok) {
    return new Response(
      JSON.stringify({ message: "데이터를 업데이트 하지 못 했습니다." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(
    JSON.stringify({ message: "데이터를 업데이트 하는데 성공했습니다." }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ message: "id가 없습니다." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });

  return new Response(
    JSON.stringify({ message: "데이터를 제거 하는데 성공했습니다." }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}
