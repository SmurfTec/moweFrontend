"use client";
import { Col, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getEventIntroImagesFromS3 } from "@/lib/api";

const Intro = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesFromS3 = await getEventIntroImagesFromS3();
      setImages(imagesFromS3);
      setSelectedImage(imagesFromS3[0]);
      setLoading(false);
    };

    fetchImages();
  }, []);

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
    localStorage.setItem("introImage", image);
  };

  if (loading) {
    return <Spin />;
  }

  return (
    <Row gutter={[32, 0]} justify={"space-between"}>
      <Col span={6} className="max-h-96 overflow-auto space-y-4 p-0">
        <div className="max-h-96 overflow-auto space-y-4 pr-3">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt="event-intro-image"
              width={100}
              height={100}
              className={`w-full rounded-lg hover:cursor-pointer  ${
                selectedImage === image
                  ? "border-2 border-primary shadow-custom transition-all duration-300"
                  : "border-2"
              }`}
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </div>
      </Col>
      <Col span={18}>
        <Image
          src={selectedImage}
          alt="intro-image"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full max-h-96 rounded-lg object-cover"
        />
      </Col>
    </Row>
  );
};

export default Intro;
