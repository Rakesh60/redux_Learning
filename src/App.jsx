import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Layout from "./Layout";

const router = createBrowserRouter([
  { path: "/", element: <Layout></Layout> },
  {
    path: "/profile",element:<Layout></Layout>, children: [
      {index:true,element:<div>Parent profile home</div>},
      { path: "/profile/1", element: <div>profile component</div> }
    ]
  }

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
