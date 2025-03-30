import React from "react";
import cls from "./HeaderComponent.module.css";


function HeaderComponent({children, className, ...props}) {
  return <header className={[cls.header, className].join(" ")}>{children}</header>;
}

export default HeaderComponent;
