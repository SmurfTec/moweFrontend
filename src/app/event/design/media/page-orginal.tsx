"use client";
// Import the necessary modules and components
import { Button, Col, Row, Upload, message, Modal } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Image from "next/image";
import { InfoCircleOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const Media = () => {
  const [primaryMedia, setPrimaryMedia] = useState<UploadFile | null>(null);
  const [secondaryMedia, setSecondaryMedia] = useState<UploadFile | null>(null);
  const [uploadedPrimaryMedia, setUploadedPrimaryMedia] = useState<
    string | null
  >(null);
  const [uploadedSecondaryMedia, setUploadedSecondaryMedia] = useState<
    string | null
  >(null);
  const [isPrimaryImage, setIsPrimaryImage] = useState<boolean | null>(false);
  const [isSecondaryImage, setIsSecondaryImage] = useState<boolean | null>(
    false
  );
  const [modal, setModal] = useState(false);

  const handleUploadPrimaryMedia = () => {
    if (primaryMedia) {
      const formData = new FormData();
      formData.append("file", primaryMedia as RcFile);
      setTimeout(() => {
        setUploadedPrimaryMedia(URL.createObjectURL(primaryMedia as RcFile));
        message.success("Primary media upload successful.");

        // Convert primaryMedia to JSON and save it in localStorage
        localStorage.setItem("primaryMedia", JSON.stringify(primaryMedia));
      }, 1000);
    }
  };

  const handleUploadSecondaryMedia = () => {
    if (secondaryMedia) {
      const formData = new FormData();
      formData.append("file", secondaryMedia as RcFile);
      setTimeout(() => {
        setUploadedSecondaryMedia(
          URL.createObjectURL(secondaryMedia as RcFile)
        );
        message.success("Secondary media upload successful.");
      }, 1000);
    }
  };

  const primaryMediaProps: UploadProps = {
    onRemove: () => {
      setPrimaryMedia(null);
      setUploadedPrimaryMedia(null);
      setIsPrimaryImage(false); // Reset the isPrimaryImage flag
    },
    beforeUpload: (file) => {
      // Check if the uploaded file is an image or video
      const isImageType = file.type.startsWith("image/");
      const isVideoType = file.type.startsWith("video/");

      if (!isImageType && !isVideoType) {
        message.error("You can only upload images or videos!");
        return false;
      }

      setIsPrimaryImage(isImageType); // Set the isPrimaryImage flag based on file type
      setPrimaryMedia(file as UploadFile);
      setUploadedPrimaryMedia(URL.createObjectURL(file as RcFile));

      handleUploadPrimaryMedia();

      return false;
    },
    accept: ".jpg,.jpeg,.png,.gif,.webp,.mp4,.mov,.avi,.mkv", // Specify accepted file types
    fileList: primaryMedia ? [primaryMedia] : [], // Show the primary media file in the UI
    showUploadList: false,
    listType: "picture",
  };

  const secondaryMediaProps: UploadProps = {
    onRemove: () => {
      setSecondaryMedia(null);
      setUploadedSecondaryMedia(null);
      setIsSecondaryImage(false); // Reset the isSecondaryImage flag
    },
    beforeUpload: (file) => {
      // Check if the uploaded file is an image or video (similar to primary media)
      const isImageType = file.type.startsWith("image/");
      const isVideoType = file.type.startsWith("video/");

      if (!isImageType && !isVideoType) {
        message.error("You can only upload images or videos!");
        return false;
      }

      setIsSecondaryImage(isImageType); // Set the isSecondaryImage flag based on file type
      setSecondaryMedia(file as UploadFile);
      setUploadedSecondaryMedia(URL.createObjectURL(file as RcFile));
      return false;
    },
    accept: ".jpg,.jpeg,.png,.gif,.webp,.mp4,.mov,.avi,.mkv", // Specify accepted file types
    fileList: secondaryMedia ? [secondaryMedia] : [], // Show the secondary media file in the UI
    showUploadList: false,
    listType: "picture",
  };

  useEffect(() => {
    // Check if primaryMedia exists in localStorage and set it in state if available
    const storedPrimaryMedia = localStorage.getItem("primaryMedia");
    if (storedPrimaryMedia) {
      setPrimaryMedia(JSON.parse(storedPrimaryMedia));
    }
  }, []);

  return (
    <section className="bg-white w-9/12 bg-opacity-50 backdrop-blur-md mx-auto px-20 py-10 rounded-lg">
      <div className="flex mb-3">
        <div className="space-y-3">
          <h1 className="text-2xl">Carga tu fotos</h1>
          <p>
            Para empezar, vamos a subir 2 vídeos o fotos. El principal se
            mostrará en la portada de la invitación y el secundario en el
            apartado “cuenta atrás”. Si no encuentras la foto perfecta, no te
            preocupes, vas a poder modificarla después.
          </p>
        </div>
        <div>
          <Button type="link" onClick={() => setModal(true)}>
            <InfoCircleOutlined style={{ fontSize: "20px", color: "#000" }} />
          </Button>
          <Modal
            title="Galería de ejemplos"
            centered
            open={modal}
            onOk={() => setModal(false)}
            onCancel={() => setModal(false)}
            footer={false}
            width={1000}
          >
            <Row gutter={[16, 16]} className="mt-10">
              <Col className="gutter-row" span={6}>
                <Image
                  alt="helo"
                  height={400}
                  width={400}
                  src="/event/intro/event-intro-1.jpg"
                />
              </Col>
              <Col className="gutter-row" span={6}>
                <Image
                  alt="helo"
                  height={400}
                  width={400}
                  src="/event/intro/event-intro-1.jpg"
                />
              </Col>
              <Col className="gutter-row" span={6}>
                <Image
                  alt="helo"
                  height={400}
                  width={400}
                  src="/event/intro/event-intro-1.jpg"
                />
              </Col>
              <Col className="gutter-row" span={6}>
                <Image
                  alt="helo"
                  height={400}
                  width={400}
                  src="/event/intro/event-intro-1.jpg"
                />
              </Col>
              <Col className="gutter-row" span={6}>
                <Image
                  alt="helo"
                  height={400}
                  width={400}
                  src="/event/intro/event-intro-1.jpg"
                />
              </Col>
              <Col className="gutter-row" span={6}>
                <Image
                  alt="helo"
                  height={400}
                  width={400}
                  src="/event/intro/event-intro-1.jpg"
                />
              </Col>
              <Col className="gutter-row" span={6}>
                <Image
                  alt="helo"
                  height={400}
                  width={400}
                  src="/event/intro/event-intro-1.jpg"
                />
              </Col>

              <Col className="gutter-row" span={6}>
                <Image
                  alt="helo"
                  height={400}
                  width={400}
                  src="/event/intro/event-intro-1.jpg"
                />
              </Col>
            </Row>
          </Modal>
        </div>
      </div>
      <div className="bg-white rounded-lg py-10 px-10">
        <Row gutter={[32, 0]} justify={"space-between"}>
          <Col span={12} className="max-h-96 overflow-auto space-y-4 p-0 h-56">
            <Dragger {...primaryMediaProps} className="bg-red-400">
              {uploadedPrimaryMedia ? (
                isPrimaryImage ? (
                  <Image
                    src={uploadedPrimaryMedia}
                    alt="Uploaded primary media"
                    fill={true}
                    className="w-full h-full rounded-lg object-cover"
                  />
                ) : (
                  <video
                    src={uploadedPrimaryMedia}
                    controls
                    className="w-full h-full max-h-96 rounded-lg object-cover overflow-hidden"
                  />
                )
              ) : (
                <>
                  <p className="ant-upload-drag-icon">
                    {/* <InboxOutlined /> */}
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload primary media
                  </p>
                  <p className="ant-upload-hint">
                    Support for uploading images and videos. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </>
              )}
            </Dragger>
          </Col>
          <Col span={12} className="max-h-96 overflow-auto space-y-4 p-0 h-56">
            <Dragger {...secondaryMediaProps} className="bg-blue-400">
              {uploadedSecondaryMedia ? (
                isSecondaryImage ? (
                  <Image
                    src={uploadedSecondaryMedia}
                    alt="Uploaded secondary media"
                    fill={true}
                    className="w-full h-full rounded-lg object-cover"
                  />
                ) : (
                  <video
                    src={uploadedSecondaryMedia}
                    controls
                    className="w-full h-full max-h-96 rounded-lg object-cover overflow-hidden"
                  />
                )
              ) : (
                <>
                  <p className="ant-upload-drag-icon">
                    {/* <InboxOutlined /> */}
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload secondary media
                  </p>
                  <p className="ant-upload-hint">
                    Support for uploading images and videos. Strictly prohibited
                    from uploading company data or other banned files.
                  </p>
                </>
              )}
            </Dragger>
          </Col>
        </Row>
      </div>
      <div className="flex justify-between mt-10">
        <Link href={"/event/design/intro"}>
          <Button type="default" size="large" shape="round">
            Previous Step
          </Button>
        </Link>
        <Link href={"/event/design/detail"}>
          <Button type="primary" size="large" shape="round">
            Next Step
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Media;
