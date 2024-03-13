export async function GET(request: Request) {
  const res = await fetch("http://localhost:4000/companyInfo");
  const companyInfo = await res.json();
  console.log(companyInfo);

  return Response.json({ companyInfo });
}
