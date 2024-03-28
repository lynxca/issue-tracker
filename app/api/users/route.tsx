import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import schema from "./schema";
//The get function takes a request object of type NextRequest ( in "next/server" packagees)
//We received a request and return a response
export function GET(request: NextRequest) {
  //fetch users from a db
  return NextResponse.json([
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
  ]);
}

export async function POST(request: NextRequest) {
  //first we read the body of request
  const body = await request.json();
  //return NextResponse.json(body);
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
