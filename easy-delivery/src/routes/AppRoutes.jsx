import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/cadastro/Cadastro";
import Login from "../pages/login/Login";
import HomeAdmin from "../pages/admin/HomeAdmin";
import Categoria from "../pages/admin/Categoria";
import Prato from "../pages/admin/Prato";
import EditarPrato from "../pages/admin/EditarPrato";
import HomeUser from "../pages/user/HomeUser";
import ListarCategoria from "../pages/admin/ListarCategoria";
import EditarCategoria from "../pages/admin/EditarCategoria";
import Pedido from "../pages/user/Pedido";
import PedidoUser from "../pages/user/PedidoUser";
import Pagamento from "../pages/user/Pagamento";
import PedidoAdmin from "../pages/admin/PedidoAdmin";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/categorias" element={<Categoria />} />
        <Route path="/pratos" element={<Prato />} />
        <Route path="/editar-prato/:id" element={<EditarPrato />} />
        <Route path="/user" element={<HomeUser />} />
        <Route path="/listar-categoria" element={<ListarCategoria />} />
        <Route path="/editar-categoria/:id" element={<EditarCategoria />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/meus-pedidos" element={<PedidoUser />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/pedidos-admin" element={<PedidoAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}