import { apiServer } from "@/lib/apiServer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const response = await apiServer.post("/auth/signIn", {
    email,
    password,
  });

  const status = response.status;

  if (status === 200) {
    return NextResponse.json(
      { success: true, data: response },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { success: false, data: response },
      { status: status }
    );
  }
}
