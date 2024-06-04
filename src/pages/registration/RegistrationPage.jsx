import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./RegistrationPage.module.css";
import register from "@/firebase/actions/register";
import { useDispatch } from "react-redux";

export default function RegistrationPage() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [login, setLogin] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const validatePassword = (_, value) => {
    if (!value || form.getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Пароли не совпадают!"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register({ login, email, password }, dispatch);
      navigate("/"); // Перенаправление на страницу входа после успешной регистрации
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      // Дополнительная логика обработки ошибок (например, уведомление пользователя)
    }
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
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
            <Input
              prefix={<UserOutlined />}
              placeholder="Введите логин"
              onChange={handleChangeLogin}
              value={login}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Введите email!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Введите email"
              onChange={handleChangeEmail}
              value={email}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Введите пароль!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Введите пароль"
              onChange={handleChangePassword}
              value={password}
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
              onClick={handleSubmit}
            >
              Регистрация
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
