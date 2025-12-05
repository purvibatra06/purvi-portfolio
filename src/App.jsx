import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import Experience from "./Pages/Experience/Experience";
import Contact from "./Pages/ContactMe/ContactMe";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"Projects",
    element:<Projects/>
  },
  {
    path:"Skills",
    element:<Skills/>
  },
  {
    path:"Experience",
    element:<Experience/>
  },
  {
    path:"Contact",
    element:<Contact/>
  },

]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;