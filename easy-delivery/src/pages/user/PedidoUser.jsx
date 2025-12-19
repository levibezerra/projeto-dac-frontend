import "./pedidoUser.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../images/img/logo.png";
import selecionar from "../../images/icons/selecionar.png"
import api from "../../services/easyApi";
import { toast } from "react-toastify";

export default function PedidoUser() {

  const navigate = useNavigate();
  const [pedidos, setPedidos] = useState([]);

  function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

async function carregarPedidos() {
    try {
      const token = localStorage.getItem("token")?.trim();
      const clienteId = Number(localStorage.getItem("clienteId"));

      if (!token || !clienteId) {
        toast.error("Sessão expirada. Faça login novamente.");
        navigate("/");
        return;
      }

      const authHeader = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const pedidosRes = await api.get("/pedidos/meusPedidos", authHeader);
      const pedidosCliente = pedidosRes.data;

      if (pedidosCliente.length === 0) {
        setPedidos([]);
        return;
      }

      const itensRes = await api.get("/itemPedidos", authHeader);

      const pratosRes = await api.get("/pratos", authHeader);

      const pratosMap = new Map(
        pratosRes.data.map(prato => [prato.id, prato])
      );

      const pedidosFormatados = [];

      pedidosCliente.forEach(pedido => {
        const itensDoPedido = itensRes.data.filter(
          item => item.pedidoId === pedido.id
        );

        itensDoPedido.forEach(item => {
          const prato = pratosMap.get(item.pratoId);

          pedidosFormatados.push({
            id: item.id,
            pedidoId: pedido.id,
            pratoNome: prato?.nome,
            descricao: prato?.descricao,
            imagemUrl: prato?.imagemUrl,
            categoria: prato?.categoriaNome,
            endereco: pedido.enderecoEntrega,
            status: pedido.statusPedido,
            quantidade: item.quantidade,
            total: item.subTotal
          });
        });
      });

      setPedidos(pedidosFormatados);

    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        toast.error("Acesso não autorizado.");
        navigate("/");
      } else {
        toast.error("Erro ao carregar pedidos");
      }
    }
  }

  useEffect(() => {
    carregarPedidos();
  }, []);

  return (
    <div className="container-pedido-user">

      {/* NAVBAR */}
      <div className="navbar-container-pedido-user">
        <nav>
          <a href="#">
            <img src={logo} alt="Easy Delivery" className="logo" />
          </a>

          <ul className="navbar-itens-pedido-user">
            <li>
              <button onClick={goToTop} className="link-btn-pedido-user">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/user")} className="link-btn-pedido-user">
                Voltar
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* BANNER */}
      <main className="main-pedido-user">
        <div className="div-banner-pedido-user">
          <h1>Easy Delivery</h1>
          <p>Faça seu melhor pedido aqui!</p>
        </div>

        {/* PEDIDOS */}
        <section className="container-pratos">
          <h1>Meus Pedidos</h1>

          <div className="lista-pratos">

            {pedidos.length === 0 && (
              <p>Você ainda não realizou nenhum pedido.</p>
            )}

            {pedidos.map(pedido => (
              <div className="card" key={pedido.id}>
                <img
                  src={pedido.imagemUrl}
                  alt={pedido.pratoNome}
                />

                <h2>{pedido.pratoNome}</h2>
                <p><b>DESCRIÇÃO:</b> {pedido.descricao}</p>
                <p><b>CATEGORIA:</b> {pedido.categoria}</p>
                <p><b>ENDEREÇO:</b> {pedido.endereco}</p>
                <p><b>STATUS:</b> {pedido.status}</p>
                <p><b>QUANTIDADE:</b> {pedido.quantidade}</p>
                <p><b>TOTAL:</b> R$ {pedido.total.toFixed(2)}</p>

                {pedido.status === "PENDENTE" && (
                  <div className="acoes-card">
                    <button
                      onClick={() => navigate(`/pagamento/${pedido.id}`)}
                      className="btn-icon"
                    >
                      <img src={selecionar} alt="Realizar pagamento" />
                    </button>
                  </div>
                )}
              </div>
            ))}

          </div>
        </section>

      </main>
      {/* FOOTER */}
      <footer>
        <p>Projeto DAC <br/>
           EasyDelivery &copy;2025</p>
      </footer>
    </div>
  );
}