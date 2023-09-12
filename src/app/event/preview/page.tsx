import { Button, Space } from "antd";
import React from "react";

const Preview = () => {
  return (
    <div className="flex flex-col items-center h-full">
      {" "}
      <div className="text-center space-y-10 flex-1">
        <h1 className="text-7xl text-white">Jaume & Yolanda</h1>
        <h2 className="text-6xl text-white">datexxxx</h2>
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
