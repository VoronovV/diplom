import React from "react";
import style from "./white_button.module.css";
import { Link } from "react-router-dom";

export default function White_button({ to, children }) {
  return (
    <div>
      <Link to={to}>
        <button className={style.button}>{children}</button>
      </Link>
    </div>
  );
}
