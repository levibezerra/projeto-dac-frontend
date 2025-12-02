import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/cadastro/Cadastro";
import Login from "../pages/login/Login";
import HomeAdmin from "../pages/admin/HomeAdmin";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<HomeAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}