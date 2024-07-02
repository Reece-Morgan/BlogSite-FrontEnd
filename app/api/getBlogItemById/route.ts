import { NextRequest, NextResponse } from "next/server";
import { getBlogItemById } from "@blog/api";

export const GET = async (request: NextRequest) => {
  try {
    const id = request.headers.get("id") as string;
    const res = await getBlogItemById(+id);
    return NextResponse.json({ message: "Success", response: res });
  } catch (error) {
    console.error("Error with response: ", error);
    return NextResponse.json({ message: "Error", response: error });
  }
};
