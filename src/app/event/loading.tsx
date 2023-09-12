import React from "react";
import { Spin } from "antd";

const Loading = () => {
  return (
    <section className="flex items-center justify-center">
      <Spin size="large" />
    </section>
  );
};

export default Loading;
