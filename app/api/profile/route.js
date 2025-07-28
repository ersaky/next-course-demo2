import { headers } from "next/headers";

export async function GET(request) {
  //const requestHeaders = new Headers(request.headers);
  const requestHeaders = await headers();
  const authorization = requestHeaders.get("authorization");
  console.log("profile");
  /*return new Response("<h1>Profil bilgilerim</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });*/
  //return new Response("Profil bilgilerim");
  return Response.json({
    mesaj: "Profil bilgilerim",
  });
}
