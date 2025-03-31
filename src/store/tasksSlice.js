import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Загружаем задачи из public/tasks.json (если данные лежат в public/)
export var fetchTasks = createAsyncThunk('tasks/fetchTasks', () => {
  return fetch('/data/tasks.json')
    .then(response => response.json());
});

var tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), title: action.payload, completed: false });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      var task = state.tasks.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export var { addTask, removeTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
