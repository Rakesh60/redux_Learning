import "./App.css";

import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Layout from "./Layout";
import Signup from "./Signup";
import Services from "../Pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "/about/userProfile",
            element: (
              <div
                style={{
                  border: "black 2px solid",
                  textAlign: "center",
                  fontSize: "2rem",
                  color: "white",
                }}
              >
                UserProfile
              </div>
            ),
          },
        ],
      },
      { path: "/signup", element: <Signup /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services", element: <Services /> },
    ],
  },
  {
    path: "/login",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: (
          <div
            style={{
              textAlign: "center",
              fontSize: "2rem",
              backgroundColor: "chartreuse",
              position: "absolute",
              right: "20%",
              top: "12%",
              minHeight: "500px",
              minWidth: "700px",
            }}
          >
            Login
          </div>
        ),
      },
    ],
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
