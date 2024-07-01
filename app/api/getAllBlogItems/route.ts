import { NextResponse } from "next/server";
import { getAllBlogItems } from "@blog/api";

export const GET = async () => {
  try {
    const res = await getAllBlogItems();
    return NextResponse.json({ message: "Success", response: res });
  } catch (error) {
    console.error("Error with response: ", error);
    return NextResponse.json({ message: "Error", response: error });
  }
};
