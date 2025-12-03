import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/cadastro/Cadastro";
import Login from "../pages/login/Login";
import HomeAdmin from "../pages/admin/HomeAdmin";
import Categoria from "../pages/admin/Categoria";
import Prato from "../pages/admin/Prato";
import EditarPrato from "../pages/admin/EditarPrato";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/categorias" element={<Categoria />} />
        <Route path="/pratos" element={<Prato />} />
        <Route path="/editar-pratos" element={<EditarPrato />} />
      </Routes>
    </BrowserRouter>
  );
}