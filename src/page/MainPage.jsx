import React from "react";
import Message from '../components/message/Message';
import CommentsList from '../components/commentsList/CommentsList';


export default function MainPage() {
    var { 0: comments, 1: setComments } = React.useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);;
  return (
    <div className="App">
      <Message>Комменты</Message>
      <CommentsList comments={comments} deleteComment={(id) => setComments(comments.filter(comment => comment.id !== id))} />
    </div>
  );
}
