import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Button, Input } from "antd";

import Header from "../../components/Header/Header";

const { Content, Sider } = Layout;
const { TextArea } = Input;
const { SubMenu } = Menu;

export default function CoursePage() {
  // Состояние для хранения текущего выбранного курса
  const [selectedCourse, setSelectedCourse] = useState(null);
  // Состояние для хранения текущей выбранной темы
  const [selectedTheme, setSelectedTheme] = useState(null);

  // Функция для обработки выбора курса из меню
  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setSelectedTheme(null); // Сбрасываем выбранную тему при выборе нового курса
  };

  // Функция для обработки выбора темы из меню
  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  // Список курсов с темами и уроками
  const courses = [
    {
      title: "Математика",
      description: "Описание курса Математика",
      themes: [
        {
          title: "Тема 1",
          description: "Описание темы 1",
          lessons: ["Урок 1", "Урок 2", "Урок 3"],
        },
        {
          title: "Тема 2",
          description: "Описание темы 2",
          lessons: ["Урок 1", "Урок 2"],
        },
      ],
    },
    // Другие курсы
  ];

  return (
    <div>
      <Header></Header>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <Menu theme="Vertical " defaultSelectedKeys={["1"]} mode="inline">
            {/* Меню со списком курсов */}
            {courses.map((course, index) => (
              <SubMenu
                key={`course-${index}`}
                title={course.title}
                onClick={() => handleCourseSelect(course)}
              >
                {course.themes.map((theme, idx) => (
                  <SubMenu
                    key={`theme-${index}-${idx}`}
                    title={theme.title}
                    onClick={() => handleThemeSelect(theme)}
                  >
                    {theme.lessons.map((lesson, lessonIdx) => (
                      <Menu.Item key={`lesson-${index}-${idx}-${lessonIdx}`}>
                        {lesson}
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {/* Хлебные крошки с названием выбранного курса и темы */}
              {selectedCourse && selectedTheme && (
                <>
                  <Breadcrumb.Item>{selectedCourse.title}</Breadcrumb.Item>
                  <Breadcrumb.Item>{selectedTheme.title}</Breadcrumb.Item>
                </>
              )}
            </Breadcrumb>
            {/* Заголовок и описание выбранного курса */}
            {selectedCourse && (
              <>
                <h1>{selectedCourse.title}</h1>
                <p>{selectedCourse.description}</p>
              </>
            )}
            {/* Заголовок и описание выбранной темы */}
            {selectedTheme && (
              <>
                <h2>{selectedTheme.title}</h2>
                <p>{selectedTheme.description}</p>
              </>
            )}
            {/* Форма для комментария */}
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <h3>Оставить комментарий</h3>
              <TextArea rows={4} placeholder="Введите комментарий" />
              <Button type="primary" style={{ marginTop: "8px" }}>
                Отправить
              </Button>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
