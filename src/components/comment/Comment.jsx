import React from "react";
import cls from "./comment.module.css";

/**
 *
 * @param {React.ComponentProps<'div'>} param0
 * @returns {JSX.Element}
 */
function Comment({ className, text, deleteComment, ...props }) {
  return <div className={[cls.comment, className].join(" ")} >
    <div>{text || "Comment"}</div>
    <div>
      <button
        onClick={deleteComment.bind(null, props.id)}
        className={cls.btn}
        >
        delete
        </button>
      </div>
  </div>;
}

export default Comment;
