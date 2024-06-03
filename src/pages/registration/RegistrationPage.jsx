import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  const [form] = Form.useForm();

  const validatePassword = (_, value) => {
    if (!value || form.getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Пароли не совпадают!"));
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h2 className={styles.logo}>LOGO_L</h2>
        <h3>Добро пожаловать!</h3>
        <Form
          form={form}
          name="registration"
          initialValues={{ remember: true }}
          className={styles.loginForm}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Введите логин!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Введите логин" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Введите пароль!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Введите пароль"
            />
          </Form.Item>
          <Form.Item
            name="repeatPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Повторите пароль!" },
              { validator: validatePassword },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Повторите пароль"
            />
          </Form.Item>
          <Form.Item className={styles.text}>
            У вас уже есть аккаунт?
            <Link to="/login"> Войти</Link>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
            >
              Регистрация
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
