import style from "./header.module.css";
import { Link } from "react-router-dom";
import Green_button from "../Buttons/Green_button/Green_button";
import White_button from "../Buttons/White_button/White_button";

export default function Header() {
  return (
    <div className={style.header}>
      <div>
        <img src="public\LOGO_L.svg" alt="logo" />
      </div>
      <div className={style.buttons}>
        <Link to={"/"} className={style.favorite}>
          Избранное
        </Link>

        <White_button to="/create">Создать курс</White_button>
        <Green_button to="/login">Войти</Green_button>
      </div>
    </div>
  );
}
