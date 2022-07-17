import { Typography } from "@mui/material";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { LoadData } from "./load-data";
import { Valkyries } from "./valkyries";
// import your route components too
function App() {
  return <>
  <Typography variant="h1" gutterBottom>
    Honkai Tools
  </Typography>
  <Outlet />
  <Typography variant="h2" gutterBottom>
    Something something copyright something
  </Typography>
  </>;
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Valkyries />} />
        <Route path="load-data" element={<LoadData />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
