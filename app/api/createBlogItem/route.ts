import { NextRequest, NextResponse } from "next/server";
import { createBlogItem } from "@blog/api";

export const POST = async (request: NextRequest) => {
  try {
    const title = request.headers.get("title") as string;
    const content = request.headers.get("content") as string;
    const username = request.headers.get("username") as string;
    const res = await createBlogItem(title, content, username);
    return NextResponse.json({ message: "Success", response: res });
  } catch (error) {
    console.error("Error with response: ", error);
    return NextResponse.json({ message: "Error", response: error });
  }
};
