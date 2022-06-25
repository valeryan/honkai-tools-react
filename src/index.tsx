import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { LoadData } from "./load-data";
import { Valkryies } from "./valkryies";
// import your route components too
function App() {
  return <>
  <h1>HEADER</h1>
  <Outlet />
  <h2>FOOTER</h2>
  </>;
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Valkryies />} />
        <Route path="load-data" element={<LoadData />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
