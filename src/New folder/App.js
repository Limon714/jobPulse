import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [{ path: "/", element: <Layout /> }],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
