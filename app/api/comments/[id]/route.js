import comments from "../data";

export async function GET(_request, { params }) {
  const { id } = await params;
  const comment = comments.find((dt) => dt.id === parseInt(id));
  return Response.json({ bulunan: comment });
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const comment = await request.json();

  const index = comments.findIndex((dt) => dt.id === parseInt(id));
  comments[index].text = comment.text;

  return Response.json(comments[index]);
}

export async function DELETE(_request, { params }) {
  const { id } = await params;

  const index = comments.findIndex((dt) => dt.id === parseInt(id));

  const deleted = comments[index];

  comments.splice(index, 1);

  return Response.json(deleted);
}
