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

  const todo = await response.json();
  return Response.json({ todo });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const response = await fetch(`${url}/${id}`, {
    method: "DELETE",
  });

  const todo = await response.json();
  return Response.json({ todo });
}
