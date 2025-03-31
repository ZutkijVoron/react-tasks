import MainPage from "../page/MainPage";
import TemperatureConverter from "../page/TemperatureConverter";
import TodoList from "../page/TodoList";
import About from "../page/About";
import ProductsPage from "../page/ProductsPage";
import ProductPage from "../page/ProductPage";
import AddProductPage from "../page/AddProductPage";

var routes = [
  {
    path: "/",
    element: <MainPage />,
    name: "Главная",
    show: true
  },
  {
    path: "/temperature-converter",
    element: <TemperatureConverter />,
    name: "TemperatureConverter",
    show: true
  },
  {
    path: "/todo-list",
    element: <TodoList />,
    name: "TodoList",
    show: true
  },
  {
    path: "/about",
    element: <About />,
    name: "About",
    show: true
  },
  {
    path: "/products",
    element: <ProductsPage />,
    name: "Products",
    show: true
  },
  {
    path: "/edit/:id",
    element: <ProductPage />,
    name: "Edit",
    show: false
  },
  {
    path: "/add",
    element: <AddProductPage />,
    name: "Add",
    show: true
  }
];

export default routes;
