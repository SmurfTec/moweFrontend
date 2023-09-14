import { getImagesFromS3, uploadToS3 } from "@/lib/AwsS3";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const primaryFile = formData.get("primaryMedia") as Blob | null;
    const secondaryFile = formData.get("secondaryMedia") as Blob | null;

    if (!primaryFile && !secondaryFile) {
      return new Response(
        JSON.stringify({ error: "At least one file blob is required." }),
        {
          status: 400,
        }
      );
    }

    let primaryMedia, secondaryMedia;

    if (primaryFile) {
      const mimeType = primaryFile.type;
      const fileExtension = mimeType.split("/")[1];
      const buffer = Buffer.from(await primaryFile.arrayBuffer());
      const fileName = uuid() + "." + fileExtension;
      primaryMedia = await uploadToS3(buffer, fileName, mimeType);
    }

    if (secondaryFile) {
      const mimeType = secondaryFile.type;
      const fileExtension = mimeType.split("/")[1];
      const buffer = Buffer.from(await secondaryFile.arrayBuffer());
      const fileName = uuid() + "." + fileExtension;
      secondaryMedia = await uploadToS3(buffer, fileName, mimeType);
    }

    return new Response(
      JSON.stringify({
        message: "Upload successful.",
        primaryMedia,
        secondaryMedia,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading image:", error);
    return new Response(JSON.stringify({ message: "Error uploading image" }), {
      status: 500,
    });
  }
}
