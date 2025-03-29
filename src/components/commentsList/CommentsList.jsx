import React from "react";
import Comment from "../comment/Comment";


/**
 *
 * @param {{comments: {id: number, text: string}[]}} param0
 * @returns {JSX.Element[]}
 */
var CommentsList = React.memo(function ({ comments, deleteComment }) {
  return comments.map((comment) => <Comment key={comment.id} {...comment} deleteComment={deleteComment} />);
});

export default CommentsList;
