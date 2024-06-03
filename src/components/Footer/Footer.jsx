import React from "react";
import { Layout, Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Row
        justify="center"
        align="middle"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <Col span={8} style={{ backgroundColor: "#f5f5f5" }}>
          <img
            src={"publicLOGO_L.svg"}
            //   переделать ссылку
            alt="logo"
            style={{
              maxWidth: "100px",
              marginBottom: "16px",
              backgroundColor: "#f5f5f5",
            }}
          />
          <p style={{ backgroundColor: "#f5f5f5" }}>
            Короткий текст о вашем сайте
          </p>
        </Col>
        <Col span={8} style={{ backgroundColor: "#f5f5f5" }}>
          <a href="ссылка на Facebook">
            <FacebookOutlined
              style={{ fontSize: "24px", marginRight: "16px" }}
            />
          </a>
          <a href="ссылка на Twitter">
            <TwitterOutlined
              style={{ fontSize: "24px", marginRight: "16px" }}
            />
          </a>
          <a href="ссылка на Instagram">
            <InstagramOutlined
              style={{ fontSize: "24px", marginRight: "16px" }}
            />
          </a>
          <a href="ссылка на LinkedIn">
            <LinkedinOutlined
              style={{ fontSize: "24px", marginRight: "16px" }}
            />
          </a>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
