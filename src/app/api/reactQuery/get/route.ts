import reactQuery from "@/app/types/reactQuery";
import { NextResponse } from "next/server";

export function GET() {
  const practice: reactQuery[] = Array.from({ length: 10 }).map((_, index) => {
    return {
      id: index + 1,
      body: `ReactQuery body ${index + 1}`,
    };
  });

  return NextResponse.json(practice);
}

GET();
