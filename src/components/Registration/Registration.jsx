import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

const RegistrationForm = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <Form
      name="registration"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item name="agreement" valuePropName="checked">
        <Checkbox>
          I have read the <a href="/">agreement</a>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
