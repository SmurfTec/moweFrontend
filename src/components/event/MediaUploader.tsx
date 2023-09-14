// MediaUploader.tsx
import { Upload, message } from "antd";
import { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Image from "next/image";
import React, { useState } from "react";

const { Dragger } = Upload;

type MediaUploaderProps = {
  onFileSelected: (file: UploadFile) => void;
};

const MediaUploader: React.FC<MediaUploaderProps> = ({ onFileSelected }) => {
  const [selectedFile, setSelectedFile] = useState<UploadFile | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const draggerProps: UploadProps = {
    onRemove: () => {
      setSelectedFile(null);
      setFileUrl(null);
    },
    beforeUpload: (file) => {
      setSelectedFile(file as UploadFile);
      onFileSelected(file as UploadFile);
      setFileUrl(URL.createObjectURL(file));
      return false;
    },
    accept: ".jpg,.jpeg,.png,.gif,.webp,.mp4,.mov,.avi,.mkv", // Specify accepted file types
    fileList: selectedFile ? [selectedFile] : [], // Show the selected file in the UI
    showUploadList: false,
    listType: "picture",
  };

  return (
    <Dragger {...draggerProps}>
      {fileUrl && selectedFile ? (
        selectedFile.type?.startsWith("image/") ? (
          <Image
            src={fileUrl}
            alt="Uploaded primary media"
            fill={true}
            className="w-full h-full rounded-lg object-cover"
          />
        ) : (
          <video
            src={fileUrl}
            controls
            className="w-full h-full max-h-96 rounded-lg object-cover overflow-hidden"
          />
        )
      ) : null}
    </Dragger>
  );
};

export default MediaUploader;
