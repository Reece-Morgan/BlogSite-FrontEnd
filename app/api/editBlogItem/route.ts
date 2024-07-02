import { NextRequest, NextResponse } from "next/server";
import { editBlogItem } from "@blog/api";

export const PUT = async (request: NextRequest) => {
  try {
    const title = request.headers.get("title") as string;
    const content = request.headers.get("content") as string;
    const username = request.headers.get("username") as string;
    const id = request.headers.get("id") as string;
    const res = await editBlogItem(title, content, username, id);
    return NextResponse.json({ message: "Success", response: res });
  } catch (error) {
    console.error("Error with response: ", error);
    return NextResponse.json({ message: "Error", response: error });
  }
};
