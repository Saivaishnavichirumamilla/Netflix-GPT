import Browse from "./Browse";
import GPTSearch from "./GPTSearch";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="min-h-screen bg-black text-white">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
