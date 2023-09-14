import React from "react";
import { Button, Col, Row, Upload, message, Modal } from "antd";
import Image from "next/image";

const SampleGallery = () => {
  return (
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
  );
};

export default SampleGallery;
