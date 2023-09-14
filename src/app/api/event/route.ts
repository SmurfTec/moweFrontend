import { connectMongoDB } from "@/lib/mongodb";
import Event from "@/models/Event";
import { NextRequest, NextResponse } from "next/server";

interface RequestBody {
  title: string;
  description: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { title, description }: any = req.body;

    await connectMongoDB();

    const event = await Event.create({ title, description });

    return NextResponse.json(
      { message: "Event created successfully", event },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json(
      { message: "Error creating event", error },
      { status: 500 }
    );
  }
}
