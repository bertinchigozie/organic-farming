import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error/Error";
import OrganicFarming from "./OrganicFarming";
import BlogList from "./components/blog/BlogList";
import BlogList2 from "./components/blog/BlogList2";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <OrganicFarming />,
      errorElement: <ErrorPage />
    },
    {
      path: "organic-farming",
      element: <BlogList />
    },
    {
      path: "organic-farming-idea2",
      element: <BlogList2 />
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
