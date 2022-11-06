import "./App.scss";
import { Route } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import { RouterProvider } from "react-router-dom";
import Planet from "./Planet";
import Home from "./Home";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/planet/:planetname" element={<Planet />}></Route>
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
