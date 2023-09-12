"use client";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import Link from "next/link";
import Image from "next/image";

const images = [
  "/event/intro/event-intro-1.jpg",
  "/event/intro/event-intro-2.jpg",
  "/event/intro/event-intro-3.jpg",
  "/event/intro/event-intro-4.jpg",
];

const IntroSelection = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
    localStorage.setItem("selectedImage", image);
  };

  useEffect(() => {
    const storedImage = localStorage.getItem("selectedImage");
    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []); // Empty dependency array to run only once

  return (
    <section className="bg-white w-9/12 bg-opacity-50 backdrop-blur-md mx-auto px-20 py-10 rounded-lg">
      <p className="text-2xl mb-6">
        firstly, let’s make it epic! choose the intro for your invitation:{" "}
      </p>
      <div className="bg-white rounded-lg py-10 px-10">
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
              className="w-full max-h-96 rounded-lg object-cover"
            />
          </Col>
        </Row>
      </div>
      <div className="flex justify-end mt-10">
        <Link href={"/event/design/media"}>
          <Button type="primary" size="large" shape="round">
            Next Step
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default IntroSelection;
