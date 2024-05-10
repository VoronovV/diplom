import React from "react";
import style from "./header.module.css";

import Green_button from "../Buttons/Green_button/Green_button";
import White_button from "../Buttons/White_button/White_button";

export default function Header() {
  return (
    <div className={style.header}>
      <div>
        <img src="public\LOGO_L.svg" alt="logo" />
      </div>
      <div className={style.buttons}>
        <White_button></White_button>

        <div>switch</div>
        <White_button></White_button>
        <Green_button></Green_button>
      </div>
    </div>
  );
}
