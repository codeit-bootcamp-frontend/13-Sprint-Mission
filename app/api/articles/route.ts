import { apiServer } from "@/lib/apiServer";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const cookie = await cookies();
  const accessToken = cookie.get("accessToken")?.value;

  const { title, content, image } = await req.json();

  const response = await apiServer.post(
    "/articles",
    {
      title,
      content,
      image,
    },
    {
      headers: {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
    },
  );

  const status = response.status;

  if (status === 200) {
    const res = NextResponse.json({ data: response.data }, { status: 200 });

    return res;
  } else {
    return NextResponse.json({ data: response }, { status: status });
  }
}
