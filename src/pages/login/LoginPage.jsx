import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./LoginPage.module.css";
import getUserAndLogin from "../../firebase/actions/getUserAndLogin";
import { useDispatch } from "react-redux";
import { fetchUserByLogin } from "../../store/slices/activeUserSlice";

export default function LoginPage() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resultAction = await dispatch(fetchUserByLogin({ login, password }));

    if (fetchUserByLogin.fulfilled.match(resultAction)) {
      console.log("ok");
      navigate("/"); // Перенаправление на главную страницу
    } else {
      console.error("Ошибка авторизации", resultAction.payload);
    }
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
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
          name="login"
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
          <Form.Item className={styles.text}>
            У вас еще нет аккаунта?
            <Link to="/register"> Зарегистрироваться</Link>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginButton}
              onClick={handleSubmit}
            >
              Войти в аккаунт
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
