"use client";
import Image from "next/image";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import AuthPic from "../../../../public/auth/auth.png";
import Logo from "./Logo";
const Login = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <section className="flex items-center justify-center container m-auto">
      <div>
        <Image src={AuthPic} alt="image" />
      </div>
      <div className="mx-auto text-center">
        <Logo />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
            className="w-96"
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              className="h-10"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
            className="w-96"
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className="h-10"
            />
          </Form.Item>
          <Form.Item className="flex justify-between w-full">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
