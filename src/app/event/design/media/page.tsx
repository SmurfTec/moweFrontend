"use client";
// Import the necessary modules and components
import { Button, Col, Row, Upload, message, Modal } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Image from "next/image";
import { InfoCircleOutlined } from "@ant-design/icons";
import SampleGallery from "@/components/event/SampleGallery";
import MediaUploader from "@/components/event/MediaUploader";
import { uploadMediaToS3 } from "@/lib/api";
const { Dragger } = Upload;
import { useRouter } from "next/navigation";

const Media = () => {
  const [modal, setModal] = useState(false);
  const [primaryMedia, setPrimaryMedia] = useState<File | null>(null); // Add this line
  const [secondaryMedia, setSecondaryMedia] = useState<File | null>(null); // Add this line
  const router = useRouter();

  const handleNextClick = async () => {
    const data = await uploadMediaToS3(
      primaryMedia as any,
      secondaryMedia as any
    );
    if (data) {
      localStorage.setItem("primaryMedia", data.primaryMedia);
      localStorage.setItem("secondaryMedia", data.secondaryMedia);
      router.push("/event/design/detail");
    }
  };

  return (
    <section className="bg-white w-9/12 bg-opacity-50 backdrop-blur-md mx-auto px-20 py-10 rounded-lg">
      <div className="bg-white rounded-lg py-10 px-10">
        <Row gutter={[32, 0]} justify={"space-between"}>
          <Col span={12} className="max-h-96 overflow-auto space-y-4 p-0 h-56">
            <MediaUploader
              onFileSelected={
                (file) => setPrimaryMedia(file as any) // Use state instead of local storage
              }
            />
          </Col>
          <Col span={12} className="max-h-96 overflow-auto space-y-4 p-0 h-56">
            <MediaUploader
              onFileSelected={
                (file) => setSecondaryMedia(file as any) // Use state instead of local storage
              }
            />
          </Col>
        </Row>
      </div>
      <div className="flex justify-between mt-10">
        <Link href={"/event/design/intro"}>
          <Button type="default" size="large" shape="round">
            Previous Step
          </Button>
        </Link>
        {/* <Link href={"/event/design/detail"}> */}
        <Button
          type="primary"
          size="large"
          shape="round"
          onClick={handleNextClick}
        >
          Next Step
        </Button>
        {/* </Link> */}
      </div>
    </section>
  );
};

export default Media;
