import React from "react";
import { Input } from "antd";
import styles from "./main_page.module.css";
import Green_button from "../../components/Buttons/Green_button/Green_button";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

import Header from "../../components/Header/Header";

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

export default function Main_page() {
  return (
    <div className={styles.main_page}>
      <Header></Header>
      <main className={styles.main_container}>
        <div className={styles.input_header}>
          <Input
            placeholder="Найти курс"
            prefix={<img src="public\LOGO_L.svg" alt="Image" />}
            className={styles.input}
            input
          />
          <Green_button></Green_button>
          {/* изменить название кнопки */}
          <Dropdown
            className={styles.dropdown}
            overlayStyle={{ backgroundColor: "white" }}
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Предмет
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            className={styles.dropdown}
            overlayStyle={{ backgroundColor: "white" }}
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className={styles.space}>
                Класс
                <DownOutlined className={styles.space} />
              </Space>
            </a>
          </Dropdown>
        </div>
      </main>
    </div>
  );
}
