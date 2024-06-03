import React from "react";
import { Card, Button } from "antd";
import styles from "./CourseCard.module.css";
import LikeButton from "../Buttons/Favorite_button/Favorite_button";

const { Meta } = Card;

const CourseCard = ({ title, description, instructor, lessons }) => {
  return (
    <Card
      hoverable
      style={{
        width: 440,
        height: 200,
        borderRadius: "30px 30px 30px 30px",
        overflow: "hidden",
      }}
    >
      <div className={styles.course_info}>
        <div>
          <Meta title={title} />
          <p>{description}</p>
        </div>
        <LikeButton></LikeButton>
      </div>
      <div className={styles.instructor_info}>
        <p> {instructor}</p>
        <p> Занятий: {lessons}</p>
      </div>
    </Card>
  );
};

export default CourseCard;
