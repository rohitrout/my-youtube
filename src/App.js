import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import WatchPage from "./components/WatchPage";
import Results from "./components/Results";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainComponent />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "results",
          element: <Results />,
        },
      ],
    },
  ]);

  return (
    <div>
      {/* <Header /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
