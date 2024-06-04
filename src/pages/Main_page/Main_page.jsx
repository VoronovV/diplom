import { Input } from "antd";
import styles from "./main_page.module.css";
import Green_button from "../../components/Buttons/Green_button/Green_button";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import CourseCard from "../../components/Card/CourseCard";
import White_button from "../../components/Buttons/White_button/White_button";
import AppFooter from "../../components/Footer/Footer";

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

const courses = [
  {
    title: "Курс 1",
    description: "Описание курса 1",
    image: "https://placekitten.com/300/200",
    instructor: "Васнецов",
    lessons: 10,
  },
  {
    title: "Курс 2",
    description: "Описание курса 2",
    image: "https://placekitten.com/300/200",
  },
  {
    title: "Курс 1",
    description: "Описание курса 1",
    image: "https://placekitten.com/300/200",
  },
  {
    title: "Курс 1",
    description: "Описание курса 1",
    image: "https://placekitten.com/300/200",
  },
  {
    title: "Курс 1",
    description: "Описание курса 1",
    image: "https://placekitten.com/300/200",
  },
  {
    title: "Курс 1",
    description: "Описание курса 1",
    image: "https://placekitten.com/300/200",
  },
  {
    title: "Курс 1",
    description: "Описание курса 1",
    image: "https://placekitten.com/300/200",
  },
  {
    title: "Курс 1",
    description: "Описание курса 1",
    image: "https://placekitten.com/300/200",
  },
  {
    title: "Курс 1",
    description: "Описание курса 1",
    image: "https://placekitten.com/300/200",
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
          <Green_button>Найти</Green_button>

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
        <div className={styles.card_place}>
          <Row gutter={[16, 20]} style={{ backgroundColor: "#f5f5f5" }}>
            {courses.map((course, index) => (
              <Col span={8} key={index} style={{ backgroundColor: "#f5f5f5" }}>
                <CourseCard {...course} />
              </Col>
            ))}
          </Row>
        </div>
        <div className={styles.add_cards}></div>
      </main>
      <AppFooter></AppFooter>
    </div>
  );
}
