import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
// interface Props {
//   params: { id: number };
// }

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //Fetch data from db
  //if not found, return 404
  //Else return data
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Mosh" });
}
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //validate request body
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  if (params.id > 10)
    return NextResponse.json({ error: "User Not found" }, { status: 401 });
  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10) {
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  }
  return NextResponse.json({});
}
