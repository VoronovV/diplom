import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import Green_button from "../Buttons/Green_button/Green_button";
import White_button from "../Buttons/White_button/White_button";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth } from "../../store/slices/isAuthSlice";
import { logout } from "@/firebase";
import { removeActiveUser } from "@/store/slices/activeUserSlice";

export default function Header() {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch(removeActiveUser());
  };
  return (
    <div className={style.header}>
      <div>
        <Link to={"/"}>
          <img src="public\LOGO_L.svg" alt="logo" />
        </Link>
      </div>
      <div className={style.buttons}>
        <Link to={"/"} className={style.favorite}>
          Избранное
        </Link>
        <White_button to="/create">Создать курс</White_button>
        {isAuth ? (
          <button onClick={handleLogout}>Выйти</button>
        ) : (
          <Green_button to="/login">Войти</Green_button>
        )}
      </div>
    </div>
  );
}
