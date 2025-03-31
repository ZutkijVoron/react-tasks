import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Container,
  Paper,
  Checkbox,
  CircularProgress,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, addTask, removeTask, toggleTask } from "../store/tasksSlice";
import Message from "../components/message/Message";

var TodoList = () => {
  var dispatch = useDispatch();
  var { tasks, loading, error } = useSelector((state) => state.tasks);
  var [newTask, setNewTask] = useState("");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  var handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask(newTask));
      setNewTask("");
    }
  };

  return (
    <Container sx={{ textAlign: "center", maxWidth: 500 }} className="App">
      <Message>Список задач</Message>

      <TextField
        label="Новая задача"
        variant="outlined"
        fullWidth
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Добавить
      </Button>
      {loading && <CircularProgress sx={{ mt: 2 }} />}
      {error && <Typography color="error">{error}</Typography>}

      {/* Список задач */}
      {!loading && tasks.length > 0 && (
        <Paper sx={{ mt: 3, p: 2 }}>
          <List>
            {tasks.map((task) => (
              <ListItem
                key={task.id}
                secondaryAction={
                  <IconButton edge="end" onClick={() => dispatch(removeTask(task.id))}>
                    <DeleteIcon color="error" />
                  </IconButton>
                }
              >
                <Checkbox
                  checked={task.completed}
                  onChange={() => dispatch(toggleTask(task.id))}
                />
                <ListItemText
                  primary={task.title}
                  sx={{ textDecoration: task.completed ? "line-through" : "none" }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}

      {!loading && tasks.length === 0 && <Typography>Задач пока нет.</Typography>}
    </Container>
  );
};

export default TodoList;
