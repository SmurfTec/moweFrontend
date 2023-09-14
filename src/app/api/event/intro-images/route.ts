import { getImagesFromS3 } from "@/lib/AwsS3";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const images = await getImagesFromS3();
    return NextResponse.json(images, {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Error fetching images" },
      {
        status: 500,
      }
    );
  }
}
