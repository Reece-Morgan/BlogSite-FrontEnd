import { NextRequest, NextResponse } from "next/server";
import { deleteBlogItem } from "@blog/api";

export const DELETE = async (request: NextRequest) => {
  try {
    const id = request.headers.get("id") as string;
    const res = await deleteBlogItem(+id);
    return NextResponse.json({ message: "Success", response: res });
  } catch (error) {
    console.error("Error with response: ", error);
    return NextResponse.json({ message: "Error", response: error });
  }
};
