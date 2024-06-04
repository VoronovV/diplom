import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Button, Input } from "antd";

import Header from "../../components/Header/Header";
import styles from "./CoursePage.module.css";

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
      description:
        "Сайт представляет собой уроки по математике, которые упорядочены по принципу «от простого к сложному». Каждый урок затрагивает одну или несколько тем из математики. Уроки разбиты на шаги. Начинать изучение следует с первого шага и далее по возрастанию.Каждый пройденный урок обязательно должен быть усвоен. Поэтому, не поняв одного урока, нельзя переходить к следующему, поскольку каждый урок в математике основан на понимании предыдущего. Если Вы с первого раза урок не поняли – не расстраивайтесь. Знайте, что некоторые люди потратили месяцы и годы, чтобы понять хотя бы одну единственную тему. Отчаяние и уныние точно не ваш путь. Читайте, изучайте, пробуйте и снова пробуйте.Математика хорошо усваивается, когда человек самостоятельно открыв учебник, учит самогó себя. При этом вырабатывается определенная дисциплина, которая очень помогает в будущем. Если Вы будете придерживаться принципа «от простого к сложному», то с удивлением обнаружите, что математика не так уж и сложна. Возможно даже она покажется вам интересной и увлекательной.Что даст вам знание математики? Во-первых, уверенность. Математику знает не каждый, поэтому осознание того, что вы знаете хоть какую-то часть этой серьёзной науки, делает вас особенным. Во-вторых, освоив математику, вы с лёгкостью освоите другие науки и сможете мыслить гораздо шире. Знание математики позволяет овладеть такими профессиями как программист, бухгалтер, экономист. Никто не станет спорить, что эти профессии сегодня очень востребованы.",
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
        <Sider style={{ background: "white" }}>
          <Menu
            style={{ background: "white" }}
            theme="Vertical "
            defaultSelectedKeys={["1"]}
            mode="inline"
          >
            {/* Меню со списком курсов */}
            {courses.map((course, index) => (
              <SubMenu
                style={{ color: "black" }}
                key={`course-${index}`}
                title={course.title}
                onClick={() => handleCourseSelect(course)}
              >
                {course.themes.map((theme, idx) => (
                  <SubMenu
                    style={{ color: "black" }}
                    key={`theme-${index}-${idx}`}
                    title={theme.title}
                    onClick={() => handleThemeSelect(theme)}
                  >
                    {theme.lessons.map((lesson, lessonIdx) => (
                      <Menu.Item
                        style={{ color: "black" }}
                        key={`lesson-${index}-${idx}-${lessonIdx}`}
                      >
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
              <h3>Оставить отзыв</h3>
              <div className={styles.block__area}>
                <div>
                  <TextArea
                    className={styles.textArea}
                    rows={1}
                    placeholder="Введите комментарий"
                  />
                </div>
                <div>
                  <div>
                    <a className={style.button}>Отправить</a>
                  </div>
                </div>
              </div>
              <div className={styles.block__comment}>
                <div className={styles.block__login}>
                  <div className={styles.login}>Nina</div>
                  <div style={{ color: "gray" }}>04.06.2024</div>
                </div>
                <div className={styles.comment}>Отличный курс!</div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
