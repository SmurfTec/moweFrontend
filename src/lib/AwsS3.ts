import {
  S3Client,
  PutObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";

const region = process.env.REGION;
const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_KEY;

if (!region || !accessKeyId || !secretAccessKey) {
  throw new Error("AWS credentials are not set");
}

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export async function getImagesFromS3(): Promise<string[]> {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Prefix: "event/intro/",
  };

  const command = new ListObjectsV2Command(params);
  const data = await s3Client.send(command);
  if (data.Contents) {
    return data.Contents.map(
      (content) =>
        `https://${process.env.BUCKET_NAME}.s3.${region}.amazonaws.com/${content.Key}`
    ).filter(
      (url) =>
        url !==
        `https://${process.env.BUCKET_NAME}.s3.${region}.amazonaws.com/${params.Prefix}`
    );
  } else {
    // Handle the case where data.Contents is undefined
    console.error("No objects in bucket or error fetching objects");
    return [];
  }
}

export async function uploadToS3(
  buffer: Buffer,
  filename: string,
  mimetype: string
): Promise<any> {
  // Change return type to string
  const command = new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: `${filename}`,
    Body: buffer,
    ContentType: mimetype,
    Metadata: {
      "Content-Type": mimetype, // Ensure the correct MIME type is set
    },
  });

  try {
    await s3Client.send(command);
    console.log("File uploaded successfully.");

    // Construct and return the URL of the uploaded file
    return `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${filename}`;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}
