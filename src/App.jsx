import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";
import Experience from "./Pages/Experience/Experience";
import Contact from "./Pages/ContactMe/ContactMe";
import CvPage from "./Pages/CV/Cv";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
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
  {
    path:"CvPage",
    element:<CvPage/>
  }
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;