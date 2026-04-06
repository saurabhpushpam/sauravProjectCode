import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  await connectDB();
  return Response.json(await User.find().select("-password"));
}

export async function POST(req: Request) {
  const data = await req.json();
  await connectDB();
  return Response.json(await User.create(data));
}