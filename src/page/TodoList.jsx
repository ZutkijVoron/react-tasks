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
  var [newTask, setNewTask] = useState(null);

  var addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(null);
    }
  };

  var removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container sx={{ textAlign: "center" }} className="App">
      <Message>
        Список задач
      </Message>
      <TextField
        label="Новая задача"
        variant="outlined"
        fullWidth
        value={newTask}
        onChange={(e) => setNewTask({ name: e.target.value.trim(), id: Date.now()})}
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
              key={task.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => removeTask(index)}>
                  <DeleteIcon color="error" />
                </IconButton>
              }
            >
              <ListItemText primary={task.name} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default TodoList;
