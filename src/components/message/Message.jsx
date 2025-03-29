import React from "react";
import cls from "./message.module.css";

/**
 * Create a message component
 * @param {React.ComponentProps<'div'>} props
 * @returns {JSX.Element}
 */
function Message({ className, children, ...props }) {
  return <div className={[cls.message, className].join(" ")} >{children || "Message"}</div>;
}

export default Message;
