"use client";
import { Button, Space } from "antd";
import React, { useEffect, useState } from "react";

const Preview = () => {
  const [details, setDetails] = useState({ text: "", date: "", time: "" });

  useEffect(() => {
    const storedDetails = localStorage.getItem("eventDetails");
    if (storedDetails) {
      setDetails(JSON.parse(storedDetails));
    }
  }, []);

  return (
    <div className="flex flex-col items-center h-full">
      <div className="text-center space-y-10 flex-1">
        <h1 className="text-7xl text-white">{details.text}</h1>
        <h2 className="text-6xl text-white">
          {details.date} {details.time}
        </h2>
      </div>
      {/* This div will push the buttons to the bottom */}
      <div className="flex-1 mb-5">
        <Space size={"large"}>
          <Button size="large" shape="round">
            Modificar Diseño
          </Button>
          <Button size="large" shape="round" type="primary">
            AÑADIR DATOS
          </Button>
          <Button size="large" shape="round">
            La quiero
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Preview;
