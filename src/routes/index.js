import App from "../App";
import TemperatureConverter from "../page/TemperatureConverter";
import TodoList from "../page/TodoList";

var routes = [
  {
    path: "/",
    element: <App />,
    name: "Главная"
  },
  {
    path: "/temperature-converter",
    element: <TemperatureConverter />,
    name: "TemperatureConverter"
  },
  {
    path: "/todo-list",
    element: <TodoList />,
    name: "TodoList"
  }
];

export default routes;
