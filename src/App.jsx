import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
    errorElement: <div>Error in contact</div>,
  },
]);
function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
