import Header from "../../components/Header/Header";
import React, { useState } from "react";
import styles from "./CreatePage.module.css";
import { Input ,Dropdown, Space} from "antd";
import { DownOutlined } from "@ant-design/icons";


const { TextArea } = Input;



export default function CreatePage() {

  const items = [
    {
      label: "Математика",
      key: "0",
    },
    {
      label: "Русский язык",
      key: "1",
    },
    {
      label: "Физика",
      key: "3",
    },
  ];

  const classNumber = [
    {
      label: "5 класс",
      key: "0",
    },
    {
      label: "6 класс",
      key: "1",
    },
    {
      label: "7 класс",
      key: "3",
    },
  ];

  return( 
  <div>
    <Header></Header>
    <div className={styles.block__title}>
      <div>
        <h1 className={styles.title}>Создание курса</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto et autem quo assumenda, ad maiores accusantium atque incidunt voluptates dolore, sed quaerat ea fugit pariatur cupiditate commodi, iusto exercitationem nisi?
        Dignissimos, natus odit reiciendis quos quo porro. At totam reprehenderit quaerat, rerum et illo impedit, dolorem laborum vel minima perferendis saepe velit iste quo officiis harum sequi quasi doloribus molestias?
        Repellat magni sunt inventore nihil adipisci nesciunt placeat repudiandae vel voluptatibus dicta sit fugit similique ratione ducimus, dignissimos quaerat asperiores neque suscipit illo, nam cum. Quae sunt consequatur ut nulla.
        Quis possimus eum quo a nisi blanditiis culpa iusto enim asperiores, quos iste velit, illo totam adipisci laudantium corrupti quaerat? Porro iure ipsum corrupti rem soluta quas ratione possimus reprehenderit!
        Deserunt rerum corrupti perferendis voluptas impedit temporibus fugit, eum dolore possimus asperiores esse sed libero eaque! Id nisi, accusantium eaque ullam facilis omnis eveniet, porro tenetur in corrupti, ea deleniti?</p>
      </div>
      <div>
        <h3>Настройки</h3>
          <div style={{color:"#34353D", fontSize:14}}>Название курса</div>
              <div className={styles.block__area}>
                <div>
                  <TextArea
                    className={styles.textArea}
                    rows={1}
                    placeholder="Введите название курса"
                  />
                </div>
                <div style={{marginTop:10, display:"flex"}}>
                  <div style={{marginRight: 10}}>
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
                  </div>
                  <div >
                  <Dropdown
                    className={styles.dropdown}
                    overlayStyle={{ backgroundColor: "white" }}
                    menu={{
                      classNumber,
                    }}
                    trigger={["click"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Класс
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                  </div>
                </div>
                
                <div>
                  <div style={{marginTop: 20}}>
                    <a className={styles.button}>Следующий шаг</a>
                  </div>
                </div>
              </div>
            </div>
      </div>
    
  </div>);
}
