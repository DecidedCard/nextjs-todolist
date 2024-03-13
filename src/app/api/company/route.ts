export async function GET(request: Request) {
  const res = await fetch("http://localhost:4000/companyInfo", {
    cache: "no-cache",
  });
  const companyInfo = await res.json();

  return Response.json({ companyInfo });
}
