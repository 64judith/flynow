import { get_iata_code } from "@/script";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    if (!req.url) {
      return NextResponse.json(
        { error: "Request URL is missing" },
        { status: 400 }
      );
    }
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");

    if (!city) {
      return NextResponse.json(
        { error: "SearchParams has no value named city" },
        { status: 400 }
      );
    }

    const result = await get_iata_code(city);

    return NextResponse.json({ data: result }, { status: 200 });
  } catch (err: any) {
    console.log("error");
    return NextResponse.json({ error: err }, { status: 400 });
  }
};
