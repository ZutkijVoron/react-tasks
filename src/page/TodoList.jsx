import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Container,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Message from "../components/message/Message";

var TodoList = () => {
  var [tasks, setTasks] = useState([]);
  var [newTask, setNewTask] = useState("");

  var addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  var removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container sx={{ textAlign: "center" }} className="App">
      <Message variant="h4" gutterBottom>
        Список задач
      </Message>
      <TextField
        label="Новая задача"
        variant="outlined"
        fullWidth
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        Добавить
      </Button>
      <Paper sx={{ mt: 3, p: 2 }}>
        <List>
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" onClick={() => removeTask(index)}>
                  <DeleteIcon color="error" />
                </IconButton>
              }
            >
              <ListItemText primary={task} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default TodoList;
