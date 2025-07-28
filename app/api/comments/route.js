import comments from "./data";

export function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const sortBy = searchParams.get("sortBy") || "id";
  const order = searchParams.get("order") || "asc";

  let filtered = comments;
  if (query && query.length > 2) {
    filtered = comments.filter((comment) =>
      comment.text.toLowerCase().includes(query.toLowerCase())
    );
  }

  filtered = filtered.sort((a, b) => {
    if (order === "desc") {
      return b[sortBy] - a[sortBy];
    }
    return a[sortBy] - b[sortBy];
  });

  return Response.json(filtered);
}

export async function POST(request) {
  const comment = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text + " " + (comments.length + 1),
  };

  comments.push(newComment);

  return Response.json(newComment);
}
