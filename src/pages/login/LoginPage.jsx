import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h2 className={styles.logo}>LOGO_L</h2>
        <h3>Добро пожаловать!</h3>
        <Form
          name="login"
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
          <Form.Item className={styles.text}>
            У вас еще нет аккаунта?
            <Link to="/register">Зарегистрироваться</Link>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
            >
              Войти в аккаунт
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
