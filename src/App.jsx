import "./App.css";
import Landing from "./pages/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Pages/admin";
import Home from "./Pages/home";
import Orders from "./Pages/orders";
import Menu from "./Pages/menu";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
