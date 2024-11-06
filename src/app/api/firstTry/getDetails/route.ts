import practice from "@/app/types/practice";
import { NextResponse } from "next/server";

export function GET() {
  const practice: practice[] = Array.from({ length: 30 }).map(
    (_, index) => {
      return {
        id: index + 1,
        body: `Post body ${index}`,
      };
    }
  );

  return NextResponse.json(practice);
}

GET();
