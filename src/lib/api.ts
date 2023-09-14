// lib/api.ts
import axios from "axios";

export const getEventIntroImagesFromS3 = async () => {
  try {
    const response = await axios.get("/api/event/intro-images");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch images", error);
    return [];
  }
};

export const uploadMediaToS3 = async (primaryFile?: File, secondaryFile?: File) => {
  try {
    const formData = new FormData();
    if (primaryFile) {
      formData.append("primaryMedia", primaryFile);
    }
    if (secondaryFile) {
      formData.append("secondaryMedia", secondaryFile);
    }

    const response = await axios.post("/api/event/upload-media", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to upload file", error);
    return null;
  }
};
