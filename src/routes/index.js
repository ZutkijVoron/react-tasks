import MainPage from "../page/MainPage";
import TemperatureConverter from "../page/TemperatureConverter";
import TodoList from "../page/TodoList";
import About from "../page/About";

var routes = [
  {
    path: "/",
    element: <MainPage />,
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
  },
  {
    path: "/about",
    element: <About />,
    name: "About"
  }
];

export default routes;
