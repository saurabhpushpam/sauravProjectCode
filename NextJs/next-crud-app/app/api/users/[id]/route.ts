import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req: Request, { params }: any) {
  await connectDB();
  return Response.json(await User.findById(params.id));
}

export async function PUT(req: Request, { params }: any) {
  const data = await req.json();
  await connectDB();

  return Response.json(
    await User.findByIdAndUpdate(params.id, data, { new: true })
  );
}

export async function DELETE(req: Request, { params }: any) {
  await connectDB();
  await User.findByIdAndDelete(params.id);

  return Response.json({ message: "Deleted" });
}